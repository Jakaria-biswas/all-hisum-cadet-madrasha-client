import React from 'react';
import './Navbar.css';
import NavbarLogo from '../../images/logo.jpg';
import MenuBar from '../../images/menu.png'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <div className=' navbar-out-bg bg-light '>
                <div className='container'>

                    <nav className="navbar navbar-expand-lg bg-light  ">
                        <div className="container-fluid">
                            {/* <img className='navbar-brand' src={NavbarLogo} alt="" /> */}
                            {/* <span>আল-হায়ছাম ক্যাডেট মাদারাসা ও এতিমখানা</span> */}
                            <p  className='navbar-brand' >মেনু নির্বাচন করুন</p>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span ><img style={{ width: "20px" }} src={MenuBar} alt="" /></span>
                            </button>
                            <div className="collapse navbar-collapse " id="navbarNav">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item">
                                        <NavLink exact to="/"   activeClassName="active"  className="navLink nav-link"  >হোম</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink  exact  to="/features"  className="navLink nav-link" activeClassName="active">মাদরাসার বৈশিষ্ট্য</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink  exact to="/department" className="navLink nav-link"  activeClassName="active" >বিভাগসমূহ</NavLink>
                                    </li>
                                    <li className="nav-item">
                                          <NavLink   exact to="/contact"  className="navLink nav-link" activeClassName="active">যোগাযোগ</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>
               
            </div>
            <marquee className="marquee-new">ভর্তি চলছে ভর্তি চলছে ভর্তি চলছে যোাগাযোগ 01720-221067, 01840476809  </marquee>
               
        </div>
    );
};

export default Navbar;