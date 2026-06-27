import React from 'react'

function Footer() {
    return (
        
    <footer className='border-top' style={{backgroundColor:"#FBFBFB"}}>
        <style>{`
            .col a{
                text-decoration:none;
                color: #6c757d;
            `}
            </style>
        
        <div className='container mt-5'>
            <div className='row mt-5'>
                <div className='col'>
                    <img src='media/images/logo.svg' alt='Logo' style={{ width: "50%" }}></img>
                    <p>&copy;2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.</p>
                </div>
                <div className="col">
                    <p>Company</p>
                    <a href="">About</a>
                    <br />
                    <a href="">Products</a>
                    <br />
                    <a href="">Pricing</a>
                    <br />
                    <a href="">Referral programme</a>
                    <br />
                    <a href="">Careers</a>
                    <br />
                    <a href="">Zerodha.tech</a>
                    <br />
                    <a href="">Press & media</a>
                    <br />
                    <a href="">Zerodha cares (CSR)</a>
                    <br />
                </div>
                <div className="col">
                    <p>Support</p>
                    <a href="">Contact</a>
                    <br />
                    <a href="">Support portal</a>
                    <br />
                    <a href="">Z-Connect blog</a>
                    <br />
                    <a href="">List of charges</a>
                    <br />
                    <a href="">Downloads & resources</a>
                    <br />
                </div>
                <div className="col">
                    <p>Account</p>
                    <a href="">Open an account</a>
                    <br />
                    <a href="">Fund transfer</a>
                    <br />
                    <a href="">60 day challenge</a>
                    <br />
                </div>
            </div>
            <div className='mt-5 text-muted' style={{fontSize:"0.7rem"}}>
                <p>
                    Zerodha Broking Ltd.: Member of NSE & BSE - SEBI Registration no.:INZ000031633 CDSL: Depository services through Zerodha SecuritiesPvt. Ltd. - SEBI Registration no.: IN-DP-100-2015 Commodity Tradingthrough Zerodha Commodities Pvt. Ltd. MCX: 46025 - SEBI Registrationno.: INZ000038238 Registered Address: Zerodha Broking Ltd.,#153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For anycomplaints pertaining to securities broking please write tocomplaints@zerodha.com, for DP related to dp@zerodha.com. Pleaseensure you carefully read the Risk Disclosure Document as prescribedby SEBI | ICF
                </p>

                <p>Procedure to file a complaint on SEBI SCORES: Register on SCORESportal. Mandatory details for filing complaints on SCORES: Name,PAN, Address, Mobile Number, E-mail ID. Benefits: EffectiveCommunication, Speedy redressal of the grievances
                </p>

                <p>
                    Investments in securities market are subject to market risks; readall the related documents carefully before investing.
                </p>

                <p>
                    "Prevent unauthorised transactions in your account. Update yourmobile numbers/email IDs with your stock brokers. Receiveinformation of your transactions directly from Exchange on yourmobile/email at the end of the day. Issued in the interest ofinvestors. KYC is one time exercise while dealing in securitiesmarkets - once KYC is done through a SEBI registered intermediary(broker, DP, Mutual Fund etc.), you need not undergo the sameprocess again when you approach another intermediary." DearInvestor, if you are subscribing to an IPO, there is no need toissue a cheque. Please write the Bank account number and sign theIPO application form to authorize your bank to make payment in caseof allotment. In case of non allotment the funds will remain in yourbank account. As a business we don't give stock tips, and have notauthorized anyone to trade on behalf of others. If you find anyoneclaiming to be part of Zerodha and offering such services, pleasecreate a ticket here.
                </p>
            </div>
        </div>
    </footer>
    );
}

export default Footer;