import React, { useState } from "react";

function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Predefined knowledge base (offline AI assistant)
  const knowledgeBase = {
    "stock price of tesla": "Stock prices change frequently. Check a stock market website for real-time data!",
    "best stock to invest in": "Investment depends on market conditions. Research before investing!",
    "how to open a trading account": "You can open a trading account by registering on a brokerage platform like Zerodha or Upstox.",
    "what is the stock market": "The stock market is a place where shares of publicly traded companies are bought and sold.",
    "how can i trade options": "Options trading requires segment activation. Check with your broker for more details.",
    "what is intraday trading": "Intraday trading means buying and selling stocks within the same trading day to make quick profits.",
    "who is Nishu kumar":"Nishu kumar is the Developer of Instock .He is pursuing his Bechelor of Technology in Jai Narain College of Technology ",
    "who is your creater":"Hmmm....Nishu kumar is the Developer of Instock .He is pursuing his Bechelor of Technology in Jai Narain College of Technology "
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    const userMessage = { role: "user", content: question };
    const newMessages = [...chatMessages, userMessage];
    setChatMessages(newMessages);
    setQuestion("");

    setTimeout(() => {
      const response = generateAIResponse(question.toLowerCase());
      setChatMessages([...newMessages, { role: "ai", content: response }]);
      setLoading(false);
    }, 1000);
  };

  const generateAIResponse = (query) => {
    for (let key in knowledgeBase) {
      if (query.includes(key)) {
        return knowledgeBase[key];
      }
    }
    return "I'm not sure about that. Try asking something else!";
  };

  return (
    <div className="p-4 bg-light rounded shadow">
      <h3 className="fw-bold">Instock Assistant - Your Advisor</h3>
      <div className="chat-box border p-3" style={{ height: "300px", overflowY: "auto", background: "#f9f9f9" }}>
        {chatMessages.map((msg, index) => (
          <div key={index} className={`mb-2 p-2 rounded ${msg.role === "user" ? "bg-primary text-white" : "bg-light"}`}>
            <strong>{msg.role === "user" ? "You: " : "AI: "}</strong>
            {msg.content}
          </div>
        ))}
        {loading && <p className="text-muted">Fetching response...</p>}
      </div>

      <form onSubmit={handleChatSubmit} className="mt-3">
        <input
          type="text"
          placeholder="Ask me about stock prices..."
          className="form-control p-2"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mt-2">Ask</button>
      </form>
    </div>
  );
}

export default AIAssistant;
