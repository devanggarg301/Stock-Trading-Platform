import React from 'react'

function CreateTicket() {
    return (
        <div className='container'>
            <style>
                {`
                .clr a {
                    text-decoration: none;
                    line-height: 2.5;
                    color:  #0ca9f2ff !important;
                }`}
            </style>

            <div className='row'>
                <h1 className='fs-3 p-5 text-muted mt-5 mb-4'>To create a ticket, select a relevant topic</h1>
            </div>

            <div className='row mt-5 p-5 pb-0' style={{ lineHeight: "1.8" }}>
                <div className='col clr p-5 fs-6'>
                    <h4><i class="fa-solid fa-circle-plus"></i>Account opening</h4>
                    <a href="">Online Account Opening</a><br />
                    <a href="">Offline Account Opening</a><br />
                    <a href="">Company, Partnership and HUF Account</a><br />
                    <a href="">Opening</a><br />
                    <a href="">NRI Account Opening</a><br />
                    <a href="">Charges at Zerodha</a><br />
                    <a href="">Zerodha IDFC FIRST Bank 3-in-1 Account</a><br />
                    <a href="">Getting Started</a><br />
                </div>
                <div className='col clr p-5 fs-6'>
                    <h4><i class="fa-solid fa-user"></i>Your Zerodha Account</h4>
                    <a href="">Login Credentials</a>
                    <a href="">Account Modification and Segment Addition</a>
                    <a href="">DP ID and bank details</a>
                    <a href="">Your Profile</a>
                    <a href="">Transfer and conversion of shares</a>
                </div>
                <div className='col clr p-5 fs-6'>
                    <h4><i class="fa-solid fa-circle-plus"></i>Your Zerodha Account</h4>
                    <a href="">Margin/leverage, Product and Order types</a>
                    <a href="">Kite Web and Mobile</a>
                    <a href="">Trading FAQs</a>
                    <a href="">Corporate Actions</a>
                    <a href="">Sentinel</a>
                    <a href="">Kite API</a>
                    <a href="">Pi and other platform</a>
                    <a href="">Stockreports+</a>
                    <a href="">GTT</a>
                </div>
            </div>
            <div className='row mt-5 p-5 pb-0' style={{ lineHeight: "1.8" }}>
                <div className='col clr p-5 fs-6'>
                    <h4><i class="fa-solid fa-credit-card"></i>Funds</h4>
                    <a href=''>Adding Funds</a>
                    <a href=''>Fund Withdrawal</a>
                    <a href=''>eMandates</a>
                    <a href=''>Adding Bank Accounts</a>
                </div>
                <div className='col clr p-5 fs-6'>
                    <h4><i class="fa-solid fa-circle-notch"></i>Console</h4>
                    <a href=''>Reports</a>
                    <a href=''>Ledger</a>
                    <a href=''>Portfolio</a>
                    <a href=''>60 Day Challenge</a>
                    <a href=''>IPO</a>
                    <a href=''>Referral Program</a>
                </div>
                <div className='col clr p-5 fs-6'>
                    <h4><i class="fa-regular fa-circle"></i>Coin</h4>
                    <a href=''>Understanding Mutual Funds</a>
                    <a href=''>About Coin</a>
                    <a href=''>Buying and Selling through Coin</a>
                    <a href=''>Starting an SIP</a>
                    <a href=''>Managing your Portfolio</a>
                    <a href=''>Coin App</a>
                    <a href=''>Moving to Coin</a>
                    <a href=''>Government Securities</a>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;