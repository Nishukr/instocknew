import React, { useState, useEffect } from 'react';

function Pricing() {
    //  State for dynamic price change
    const [priceZero, setPriceZero] = useState(0);
    const [priceTwenty, setPriceTwenty] = useState(20);

    //  Function to change prices automatically
    useEffect(() => {
        const interval = setInterval(() => {
            // Increase or decrease prices randomly
            setPriceZero(prev => prev + (Math.random() > 1000 ? 1000 : 899));
            setPriceTwenty(prev => prev + (Math.random() > 100 ? 2000 : 2000));
        }, 2000); //  Prices change every 2 seconds

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='container mt-5'>
            

            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3'>Unbeatable Pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India.
                        Flat fees and no hidden charges.
                    </p>
                    <a 
                        href='#' 
                        className='mx-5' 
                        style={{ textDecoration: "none", color: "#007bff" }}
                    >
                        See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
                <div className='col-2'></div>

                <div className='col-6'>
                    <div className='row text-center'>
                        {/*  Dynamic Price Box 1 */}
                        <div className='col p-3 border rounded shadow-sm'>
                            <h1 className='mb-3 text-success'>
                                <i className="fa fa-inr" aria-hidden="true"></i> {priceZero}
                            </h1>
                            <p>Varsity, the largest online stock platform</p>
                        </div>

                        {/*  Dynamic Price Box 2 */}
                        <div className='col p-3 border rounded shadow-sm'>
                            <h1 className='mb-3 text-success'>
                                <i className="fa fa-inr" aria-hidden="true"></i> {priceTwenty}
                            </h1>
                            <p>Exclusive features and premium tools for investors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
