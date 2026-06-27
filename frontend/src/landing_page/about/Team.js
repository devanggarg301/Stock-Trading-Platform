import React from 'react'

function Team() {
    return (
        <div className='container'>
            <style>{`p a{color:blue !important}`}</style>
            <div className='row'>
                <h1 className='text-center text-muted '>People</h1>
            </div>
            <div className='row mt-5 p-3' style={{lineHeight:"1.8"}}>
                <div className='col p-3 fs-6 text-center text-muted'>
                    <img src='media/images/nithinKamath.jpg' alt="Photo" style={{borderRadius:"100%", width:"50%"}}></img>
                    <h4 className='mt-4' style={{color:"#495057"}}>Nithin Kamath</h4>
                    <h6>Founder, CEO</h6>
                </div>
                <div className='col p-3 fs-6'>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                    <p>
                        Connect on <a href=''>Homepage</a> / <a href=''>TradingQnA</a> / <a href=''>Twitter</a>
                    </p>
            </div>
        </div>
        </div >
    );
}

export default Team;