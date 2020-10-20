import React from 'react'
import './Galery.scss';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './Contents/About/About'
export default function Galery() {
    AOS.init({once:true});
    return (
        <div className="Galery" data-aos="slide-left" data-aos-duration="400">
            <About/>
            
        </div>
    )
}
