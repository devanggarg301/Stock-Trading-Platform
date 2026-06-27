import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className='Container p-5 text-center mb-5'>
            <div className='row'>
                <h1 className='mt-5 fs-2'>404 Not Found</h1>
                <p className='fs-4 text-muted'>Sorry, the page you are looking for does not exists.</p>
                <Link to={'/'}><button className='p-2 btn btn-primary fs-5 mt-3' style={{width:"20%",margin:"auto"}}>Go to Home</button></Link>
            </div>
        </div>
    );
}

export default NotFound;