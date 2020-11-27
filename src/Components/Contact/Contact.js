import React from 'react'
import ReactPlayer from 'react-player'
import './Contact.scss'
export default function Video() {
    
    return (
        <div className="Video-Container" id="video">
            <h1>Theatre time!</h1>
            <ReactPlayer url="https://youtu.be/Vj9RyMifCAE" loop={true} controls={true} width="80vw" max-width="700px" height="60vh" max-height="500px"/>
        </div>
    )
}
