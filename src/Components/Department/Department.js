import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBuilding, faCoffee, faRestroom } from '@fortawesome/free-solid-svg-icons'
import './Department.css';
import quran from '../../images/learn.PNG'
const Department = () => {
    return (
        <div className='container  py-4'>
            <div className='department-heading'>
                <h2 >বিভাগসমূহ</h2>
            </div>
            <div className="row">  
                <div className="col-md-6">
                      <div className='department-image'>
                         <img className='img-fluid' src={quran} alt="" />
                      </div>
                </div>
                <div className=" mt-4 col-md-6  d-flex align-items-center justify-content-center">
                <div className='department-text'>
                        <h3> <FontAwesomeIcon className="check_icon" icon={faBook} /> মাদারাসা বিভাগ</h3>
                        <ul>
                            <li>নূরানী ক্বিরাত বিভাগ</li>
                            <li>হিফজুল কুরআন বিভাগ</li>
                        </ul>
                   

                        <h3>  <FontAwesomeIcon className="check_icon" icon={faBook} /> স্কুল বিভাগ</h3>
                        <p>প্লে থেকে তৃতীয় শ্রেণি</p>
                        <h3> <FontAwesomeIcon className="check_icon" icon={faBuilding} /> আবাসিক</h3>
                        <ul>
                            <li>শুধু বালকদের জন্য।</li>
                        </ul>
                        <h3> <FontAwesomeIcon className="check_icon" icon={faRestroom} />  অনাবাসিক</h3>
                        <h5>ডে-কেয়ার</h5>
                        <ul>
                            <li>বালক-বালিকা</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Department;