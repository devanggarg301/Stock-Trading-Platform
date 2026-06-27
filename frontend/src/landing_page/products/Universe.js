import React from 'react'
import { Link } from 'react-router-dom';

function Universe() {
    return (
        <div className='container'>
            <div className='row text-center p-5 pt-0 m-5'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-5'>
                    <img src="media/images/zerodhaFundhouse.png" style={{width:"70%"}}/>
                    <p className='pt-3'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                    <img src="media/images/streakLogo.png" className='mt-5'  style={{width:"70%"}}/>
                    <p className='pt-3'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src="media/images/sensibullLogo.svg"style={{width:"80%"}}/>
                    <p className='pt-3'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    
                    <img src="media/images/smallcaseLogo.png" className='mt-5'/>
                    <p className='pt-3'>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src="media/images/tijori.svg"style={{width:"70%"}}/>
                    <p className='pt-3'>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                    
                    <img src="media/images/dittoLogo.png" className='mt-5'style={{width:"50%"}}/>
                    <p className='pt-3'>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>
                <Link to={"/signup"}><button className='p-2 btn btn-primary fs-5 mt-3' style={{width:"20%",margin:"auto"}}>Signup Now</button></Link>
            </div>
        </div>
    );
}

export default Universe;