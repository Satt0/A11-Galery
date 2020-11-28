import React from 'react'
import ReactPlayer from 'react-player/lazy'
import './Contact.scss'
export default function Video() {
    
    return (
        <div className="Video-Container" id="video">
            <h1>Theatre time!</h1>
            <ReactPlayer url="https://youtu.be/Vj9RyMifCAE" loop={true} controls={true} width="60vw" min-width="400px" height="60vh" max-height="500px"/>
        </div>
    )
}
