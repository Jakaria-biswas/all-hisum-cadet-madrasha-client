import React from 'react';
import './Header.css';
import logo from '../../images/logo.jpg'
const Header = () => {
    return (
        <div className="header-out-side  p-2">
            <div className='container'>

                <div className="d-flex justify-content-between">
                    <div className="text-1">
                        <p>যুগোপযোগী আদর্শ শিক্ষা ও সেবামূলক একটি প্রতিষ্টান </p>
                    </div>
                    <div className="text-2">
                        <p>"সু-শিক্ষাই জাতির মেরুদন্ড"</p>
                    </div>
                </div>


                <div className="row main-header-part" >
                    <div className="d-flex justify-content-between">

                        <div className="col-md-4 d-flex align-items-center  justify-content-end">
                            <div className="logo">
                                <img className='img-fluid' src={logo} alt="" />
                            </div>
                        </div>


                        <div className="col-md-8 d-flex align-items-center">
                            <div className='main-header'>
                                <h2>আল-হায়ছাম ক্যাডেট মাদারাসা ও এতিমখানা</h2>
                                <p>নিগি কমপ্লেক্স (৩য় তলা) নতুন বাজার রোড, গোপালগঞ্জ সদর।</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;