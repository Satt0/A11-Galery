import React from 'react'
import './Intro.scss';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
export default function Intro() {
    AOS.init({once:true});
    return (
        <div className="Intro" data-aos="fade-in"   data-aos-duration="1000" >
            <div className="Intro-Hello" data-aos="slide-up"     data-aos-duration="1000"
> 
                hello everyone
            </div>
            <div className="Intro-Link">
                <Link to='/galery'>go to Galery</Link>
            </div>
            
        </div>
    )
}
