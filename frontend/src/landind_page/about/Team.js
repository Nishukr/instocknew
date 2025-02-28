import React from "react";

function Team() {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      {/* Team Member Section */}
      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        {/* CEO Image */}
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/my dhimprapur img.jpg"
            alt="Nishu Kumar"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Nishu Kumar</h4>
          <h6>Founder, CEO</h6>
        </div>

        {/* CEO Description */}
        <div className="col-6 p-3">
          <p>
            Nishu Kumar founded Instock with a vision to revolutionize stock trading by providing 
            real-time market insights and seamless investment opportunities for traders and investors alike.
          </p>
          <p>
            With a deep passion for financial technology, Nishu has played a key role in developing 
            innovative solutions that empower users to make informed trading decisions with confidence.
          </p>
          <p>
            His leadership and expertise in problem-solving have made Instock one of the most reliable 
            platforms for stock pricing and market analysis.
          </p>

          
          <p>
            Connect on: 
            <a href="/" className="ms-2 text-primary" style={{ textDecoration: "none" }}>Homepage</a> /
            <a 
              href="https://www.linkedin.com/in/nishu-kumar-114bb5256/" 
              target="_blank"
              rel="noopener noreferrer"
              className="ms-2 text-primary"
              style={{ textDecoration: "none" }}
            >
              LinkedIn
            </a> /
            <a href="https://github.com/Nishukr" className="ms-2 text-primary" style={{ textDecoration: "none" }}>Github</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
