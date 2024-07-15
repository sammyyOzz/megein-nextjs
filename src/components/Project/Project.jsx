import React from 'react'
import './Project.css'
import women from '../../assets/images/women2.png'

function Project({ className, title, date, text, image, link, linkText }) {

    return (
        <div className={`project ${className}`}>
            <h2>{title}</h2>
            <a href={link} target="_blank" rel="noreferrer">{ linkText }</a>
            <h3>-- {date}--</h3>
            {/* <img src={image} alt="" /> */}
            {/* <p>{text}</p> */}
        </div>
    )
}

export default Project
