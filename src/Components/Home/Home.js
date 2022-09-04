import React from 'react';
import Contact from '../Contact/Contact';
import Department from '../Department/Department';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import News from '../News/News';

const Home = () => {
    return (
        <div>
                {/* <Header/>
                <Navbar/> */}
                <Features/>
                <Department/>
                <Contact/>
                {/* <Footer/> */}
        </div>
    );
};

export default Home;