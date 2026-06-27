import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='Container p-5 text-center mb-5'>
            <div className='row'>
                <img src='media/images/homeHero.png' alt='Hero' className='mb-5' style={{width:"50%",margin:"auto"}}></img>
                <h1 className='mt-5 fs-2'>Invest in everything</h1>
                <p className='fs-4 text-muted'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <Link to={"/signup"}><button className='p-2 btn btn-primary fs-5 mt-3' style={{width:"20%",margin:"auto"}}>Signup Now</button></Link>
            </div>
        </div>
    );
}

export default Hero;