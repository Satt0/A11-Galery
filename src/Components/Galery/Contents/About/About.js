import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function About() {
    AOS.init({once:true})
    return (
        <div className="About" data-aos="slide-right">
            <div className="img">

            </div>
            <div className="content">

            </div>
        </div>
    )
}
