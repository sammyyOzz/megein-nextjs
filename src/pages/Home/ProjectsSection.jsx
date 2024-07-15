import React from 'react'
import './ProjectsSection.css'
import circle5 from '../../assets/icons/circle5.png'
import circle2 from '../../assets/icons/circle2.png'

function ProjectsSection() {

    return (
        <section className="projectsSection">
            <h1>OBJECTIVES</h1>
            <img src={circle5} alt="" className="projectsSection__circle5" />
            <img src={circle2} alt="" className="projectsSection__circle2" />
            <div className="projectsSection__image">
                <div className="projectsSection__overlay">
                    <div className="projectsSection__overlayContent">
                        <h2 className="projectsSection__title">Objectives</h2>
                        <p className="projectsSection__text">To continuously monitor the extent of gender sensitivity by Nigerian Mass Media.</p>
                        <p className="projectsSection__text">To inculcate deep understanding and appreciation of the principles of gender perspective reporting in Nigerian journalists and ensure they put same into practice when reporting gender related issues.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
