import React from 'react'

function OpenAccount() {
    return (
        <div className='Container p-5 text-center mb-5'>
            <div className='row'>
                <h1 className='mt-5 fs-2'>Open a Zerodha account</h1>
                <p className='fs-4 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='p-2 btn btn-primary fs-5 mt-3' style={{width:"20%",margin:"auto"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default OpenAccount;