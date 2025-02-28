import React from 'react'

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>

                <div className='col-6'>
                    <img 
                        src='media/images/stock market website poster with the name Instock and a white background.png' 
                        alt='Instock Poster'
                        style={{
                            width: "100%",    
                            height: "auto",   
                            maxHeight: "300px" 
                        }}
                    />
                </div>
                <div className='col-6'>
                    <h1>Largest Stock Broker in India</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                    </div>
        
                    <img 
                        src='media/images/pressLogos.png' 
                        alt='Press Logos'
                        style={{
                            width: "80%",      
                            height: "auto",    
                            maxHeight: "150px" 
                        }}
                    />
                </div>
            </div>
        </div>
     );
}

export default Awards;
