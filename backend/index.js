require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const bodyParser = require('body-parser');
const cors=require('cors');


const { HoldingsModel, HoldingModels } = require("./model/HoldingModels");
const { PositionsModel } = require("./model/PositionsModel");
const {OrdersModel}= require('./model/OrdersModel');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());





app.get('/allHoldings',async(req,res)=>{
    let allHoldings=await HoldingModels.find({});
    res.json(allHoldings);
});

app.get('/allPositions',async(req,res)=>{
    let allPositions=await  PositionsModel.find({});
    res.json(allPositions);
})

app.post("/newOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully!" });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ message: "Server error while saving order" });
  }
});


app.get("/orders", async (req, res) => {
  try {
    const orders = await OrdersModel.find();
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Server error while fetching orders" });
  }
});



//for sell stock

app.delete("/orders/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await OrdersModel.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json({ message: "Stock sold successfully!", order: deletedOrder });
  } catch (error) {
    console.error("Error selling stock:", error);
    res.status(500).json({ message: "Server error while selling stock" });
  }
});






    
    
// MongoDB Connection
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// User Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});


const User = mongoose.model("User", UserSchema);

// Signup API
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
      // Check if the email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ error: "Email already exists" });
      }

      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save();

      res.status(201).json({ message: "Signup successful!" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
  }
});


app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(400).json({ error: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).json({ error: "Invalid password" });
      }

      res.status(200).json({ message: "Login successful!" });
  } catch (error) {
      res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages,
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("OpenAI API Error:", error.message);
    res.status(500).json({ error: "AI response error" });
  }
});



    
  
    
    
    
   

// Schema for User Wallet
const walletSchema = new mongoose.Schema({
  userId: String,
  balance: Number,
});

const Wallet = mongoose.model("Wallet", walletSchema);

//  Route to add funds
app.post("/api/add-funds", async (req, res) => {
  const { userId, amount } = req.body;

  if (!userId || !amount || amount <= 0) {
    return res.status(400).json({ success: false, message: "Invalid data" });
  }

  try {
    let wallet = await Wallet.findOne({ userId });

    if (!wallet) {
      wallet = new Wallet({ userId, balance: amount });
    } else {
      wallet.balance += amount;
    }

    await wallet.save();
    res.json({ success: true, balance: wallet.balance });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

//  Route to withdraw funds
app.post("/api/wallet/withdraw-funds", async (req, res) => {
  const { userId, amount } = req.body;

  if (!userId || !amount || amount <= 0) {
    return res.status(400).json({ success: false, error: "Invalid data" });
  }

  try {
    let wallet = await Wallet.findOne({ userId });

    if (!wallet || wallet.balance < amount) {
      return res.status(400).json({ success: false, error: "Insufficient balance" });
    }

    wallet.balance -= amount;
    await wallet.save();

    res.json({ success: true, balance: wallet.balance });
  } catch (error) {
    res.status(500).json({ success: false, error: "Database error" });
  }
});

//  Route to fetch wallet balance
app.get("/api/wallet/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    let wallet = await Wallet.findOne({ userId });

    if (!wallet) {
      return res.json({ balance: 0 });
    }

    res.json({ balance: wallet.balance });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});





app.listen(PORT, () => {
  console.log("app is started");
 // mongoose.connect(uri);
  console.log("dg");
});
