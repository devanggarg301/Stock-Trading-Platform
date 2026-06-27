import React from 'react'

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return (
        <div className='container'>
            <div className='row p-5'>
                <div className='col-7 p-5 pt-0'>
                    <img src={imageURL} style={{width:"90%"}}></img>
                </div>
                <div className='col-4 mt-5'>
                    <h1 className='mb-4 fs-3'>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo<i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href={learnMore} style={{marginLeft:"120px",textDecoration:"none"}}>learnMore<i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div>
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" className='mt-4'/></a>
                        <a href={appStore} style={{marginLeft:"50px"}}><img src="media/images/appStoreBadge.svg" className='mt-4'/></a>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    );  
}

export default LeftSection;