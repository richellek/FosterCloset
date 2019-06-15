import React from 'react';

function Footer(props) {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-4'>
                        <h5>Location</h5>
                        <address>
                            1504 Larabee Ave
                            <br />
                            Bellingham, WA 98225
                        </address>
                    </div>
                    <div className='col-4'>
                        <h5>Hours</h5>
                        <p>
                            Saturdays
                            <br />
                            10:00 AM–2:00 PM
                        </p>
                    </div>
                    <div className='col-4'>
                        <h5>Mailing Address</h5>
                        <address>
                            65 Sudden Valley Dr
                            <br />
                            Bellingham, WA 98229
                        </address>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-auto'>
                        <p>© Copyright 2019 House of Rubies</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
