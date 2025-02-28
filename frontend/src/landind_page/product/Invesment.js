import React from "react";

function Investment() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="fw-bold">Investment Opportunities</h1>
        <p className="text-muted mt-3 fs-5">
          Explore a variety of investment options tailored for your financial growth.
        </p>
      </div>

      <div className="row mt-4">
        {/* Stock Market Investment */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h3 className="fw-bold">Stock Market</h3>
            <p className="text-muted">
              Invest in top-performing stocks and maximize your returns.
            </p>
            <a href="/stocks" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>

        {/* Mutual Funds Investment */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h3 className="fw-bold">Mutual Funds</h3>
            <p className="text-muted">
              Diversify your portfolio with expert-managed mutual funds.
            </p>
            <a href="/mutual-funds" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>

        {/* ETFs Investment */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h3 className="fw-bold">ETFs</h3>
            <p className="text-muted">
              Invest in ETFs for balanced exposure to different markets.
            </p>
            <a href="/etfs" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investment;
