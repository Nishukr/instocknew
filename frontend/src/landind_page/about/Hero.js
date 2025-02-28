import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          <strong>Instock</strong> - Your Trusted Stock Pricing Platform
          <br />
          Real-time stock prices and market insights at your fingertips.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            <strong>Instock</strong> was launched with the vision of providing real-time stock pricing data,
            helping investors and traders make informed decisions with ease.
            Our mission is to break barriers in financial technology and democratize
            access to market insights.
          </p>
          <p>
            Today, our innovative pricing models and cutting-edge technology have
            made us a go-to platform for stock market enthusiasts.
          </p>
          <p>
            With thousands of users relying on our platform daily, <strong>Instock</strong> empowers investors
            by providing real-time stock prices, historical data, and analytics tools
            to make smarter trading decisions.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            Additionally, we offer extensive educational resources and a strong
            community to support new and experienced investors alike.
          </p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              <strong>Instock</strong> Insights
            </a>
            , our dedicated research and analysis hub, provides in-depth financial
            reports and market predictions to help you stay ahead.
          </p>
          <p>
            We are continuously innovating to bring new features and better user
            experiences. Stay updated with the latest trends on our blog or check
            out what industry experts are saying about <strong>Instock</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
