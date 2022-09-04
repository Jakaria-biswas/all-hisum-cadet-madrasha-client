import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer-bg'>
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-4">
                        <div className='footer-text'>
                            <p>অত্র প্রতিষ্ঠান সার্বক্ষনিক সিসি ক্যামেরা দ্বারা নিয়ন্ত্রিত।</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='footer-text'>
                            <p>সার্বিক যোগাযোগ</p>
                            <p>মাওলানা মুহাঃ মেহেদী হাসান</p>
                            <p> +8801720-221067</p>
                            <p> +8801840476809</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='footer-text'>
                              <p>আল-হায়ছাম ক্যাডেট মাদারাসা ও এতিমখানা</p>
                              <p> <FontAwesomeIcon icon={faLocationDot}/> নিগি কমপ্লেক্স (৩য় তলা) নতুন বাজার রোড, গোপালগঞ্জ সদর।</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='copy-right-text text-white text-center pb-4'> &copy; আল-হায়ছাম ক্যাডেট মাদারাসা ও এতিমখানা</p>
        </div>
    );
};

export default Footer;