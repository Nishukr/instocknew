import React from 'react';

function Stats() {
    return ( 
        <div className='container mt-5 '>
            <div className='row p-5'>
                <div className='col-6 p-5'>

                    <h1 className='fs-2 mb-5'>Trust with confidence</h1> 
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p>At Instock, our mission is to connect people with skilled workers seamlessly. Thousands of users trust Instock for reliable and efficient hiring.</p>

                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p>No spam, misleading offers, or unnecessary notifications. We focus on delivering a smooth and effective experience tailored to your hiring needs.</p>

                    <h2 className='fs-4'>The Instock Universe</h2>
                    <p>Instock is not just a platform but a complete ecosystem. Whether you're looking for carpenters, electricians, housemaids, or any other skilled professionals, our extensive network ensures you find the right match effortlessly.</p>

                    <h2 className='fs-4'>Empowering skilled professionals</h2>
                    <p>We believe in creating opportunities. Instock helps skilled workers connect with potential clients, ensuring fair wages and steady work opportunities.</p>
                </div>

                <div className='col-6 p-5'>
                    <img src='\media\images\trust and confidence.png' style={{ width: "95%" }} alt="Instock Ecosystem" />
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{ textDecoration: "none" }}>
                            Explore Instock <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a href='' style={{ textDecoration: "none" }}>
                            Find Workers <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
