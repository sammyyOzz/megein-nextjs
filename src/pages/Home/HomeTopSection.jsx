import React from 'react'
import './HomeTopSection.css'
import logo from '../../assets/images/logo.jpg'
import Image from 'next/image'

function HomeTopSection() {

    return (
        <div className="homeTopSection">
            <div>
                <Image className="homeTopSection__logo" src={logo} alt="" />
                <h1>MEDIA AND GENDER ENLIGHTENMENT INITIATIVE (MEGEIN)</h1>
                <h2>WATCHING THE WATCHDOG</h2>
                {/* <p>Lorem ipsum dolor sit amet, consectetu r adipiscing elitPraesent  rutrum a turpis vel iaculis. Morbi ac lorem sitamet sem finib
                Lorem ipsum dolor sit amet, cor adipiscing elitPraesent rutrum a turpis vel iaculis. Morbi ac amet, consectetu r adipiscing elitPraesent 
                rutrum a turpis vel iaculis. Morbi ac lorem sitamet sem finibLorem ipsum dolor met, cor adipiscing elitPraesent rutrum a 
                turpis vel iaculis. Morbi ac lorem s</p> */}
            </div>
        </div>
    )
}

export default HomeTopSection
