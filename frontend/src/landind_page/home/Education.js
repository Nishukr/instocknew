import React from 'react'

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
            <div className='col-6'>
                <img src='media\images\stock pricing poster with white background, no unrelated elements or human figures.png' style={{width:"80%"}}/>
                    
                </div>
                <div className='col-6'>
                    <h1 className='mb-3'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.Flat fees and no hidden charges.</p>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>Varsity  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>TradingQ&A  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                
                
            </div>
        </div>
     );
}

export default Education;