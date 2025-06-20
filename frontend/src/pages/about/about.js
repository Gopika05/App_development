import React from 'react';
import './about.css';
// import {Link} from 'react-router-dom'
import Navbar from '../../components/layouts/navbar/Navbar';
import Footer from '../../components/layouts/footer/Footer';

const AboutUs = () => {
    return (
        <section>
            <Navbar darkTheme={ true } />
        <div className="about-us-page">
            <div className="containers">
                <div className="about">
                    
                </div>
                <div className="contents">
                    
                    <p className='contai'><b>Dear Readers,</b></p>
                    <p> 

                    </p>
                    <p className='consist'>
                                   Welcome to Book Hunt, where we believe in the transformative power of books. Founded in 2023, our mission is to connect you with stories and knowledge that inspire, educate, and entertain. From our extensive collection of genres—including fiction, non-fiction, children's books, and young adult novels—to our personalized recommendations and exclusive content like author interviews and book reviews, we strive to make your reading experience enjoyable and enriching. At Book Hunt, we celebrate diversity in literature, prioritize customer satisfaction, and are committed to sustainable practices. Join our vibrant 
                                   community of readers, participate in book clubs, and find your next great read with us.<b> Thank you for choosing Book Hunt.</b> 
                    </p>
                <p className='dark'><b>Happy reading!</b></p>
                </div>
            </div>
        </div>
        <Footer/>
        </section>
    );
};

export default AboutUs;


//aboutus.jsx