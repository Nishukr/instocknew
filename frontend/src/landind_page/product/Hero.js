import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate(); 

  return (
    <div className="container text-center p-5">
      <h1>Invest in Everything</h1>
      <p>
        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
      </p>
      <button
        className="btn btn-primary"
        onClick={() => navigate("/investments")} 
      >
        Explore Investments
      </button>
    </div>
  );
}

export default Hero;
