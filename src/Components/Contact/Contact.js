import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faPhone, fas } from '@fortawesome/free-solid-svg-icons'
import './Contact.css';
import ContactImg from '../../images/call-contact.PNG'
const Contact = () => {
    return (
        <div className=' py-4'>
            <div className='container'> 
            <div className="contact-heading">      
                <h2>যোগাযোগ</h2>     
            </div>
            <div className="row">
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <div className='contact-text'>
                      <h3>সার্বিক যোগাযোগ</h3>
                      <h4>মাওলানা মুহাঃ মেহেদী হাসান</h4>
                    <p><FontAwesomeIcon icon={faMobile} /> +8801720-221067</p>
                    <p><FontAwesomeIcon icon={faMobile}/> +8801840476809</p>
                 </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center">
                     <div className='contact-image'>
                          <img className='img-fluid' src={ContactImg} alt="" />
                     </div>
                  </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;