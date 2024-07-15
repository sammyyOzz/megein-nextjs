import { Grid } from '@mui/material'
import React from 'react'
import './TopSection.css'
import Image from 'next/image'

function TopSection({ title, text, image, className, projectPage }) {
    
    return (
        <div className={`topSection ${className}`}>
            <div className={`topSection__container ${projectPage ? 'topSection__projectPage' : ''}`}>
                <Grid container columns={18}>
                    <Grid item xs={2} md={3} />
                    <Grid item xs={13} md={7} className="topSection__content">
                        <h1 style={{ color: !projectPage ? '#717171' : 'white' }}>{title}</h1>
                        <p style={{ color: !projectPage ? '#202020' : 'white' }}>{text}</p>
                    </Grid>
                    <Grid item xs={3} md={8} />
                </Grid>
            </div>
            <Image src={image} alt="" />
        </div>
    )
}

export default TopSection
