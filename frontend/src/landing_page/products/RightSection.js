import React from 'react'

function RightSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return (
        <div className='container'>
            <div className='row p-5'>
                <div className='col-4 mt-5'>
                    <h1 className='mb-4 fs-3'>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none"}}>learnMore<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col'></div>
                <div className='col-7'>
                    <img src={imageURL} style={{width:"90%"}}></img>
                </div>
                
            </div>
        </div>
    );
}

export default RightSection;