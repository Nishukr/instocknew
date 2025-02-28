import React, { useState } from 'react';

function Brokerage() {

    const [isVisible, setIsVisible] = useState(false);

    
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className="container">
            <div className="row p-5 mt-5 text-center border-top">
                <div className="col-8 p-4">
                    <a href="#" style={{ textDecoration: "none" }}>
                        <h3 className="fs-5">Brokerage Calculator</h3>
                    </a>

                    
                    <button 
                        className="btn btn-outline-primary mb-3"
                        onClick={toggleVisibility}
                    >
                        {isVisible ? "Hide Details" : "Show Details"}
                    </button>

                
                    <ul
                        style={{
                            textAlign: "left", 
                            lineHeight: "2.5", 
                            fontSize: "14px",
                            maxHeight: isVisible ? "1000px" : "0",
                            overflow: "hidden",
                            transition: "max-height 0.4s ease"
                        }}
                        className="text-muted"
                    >
                        <li>
                            Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
                        </li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>
                            Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
                        </li>
                        <li>
                            For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
                        </li>
                        <li>
                            For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
                        </li>
                        <li>
                            If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
                        </li>
                    </ul>
                </div>

                <div className="col-4 p-4">
                    <a href="#" style={{ textDecoration: "none" }}>
                       
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;
