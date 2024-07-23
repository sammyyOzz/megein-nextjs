import { Grid } from '@mui/material'
import React from 'react'
import './Card.css'
import Image from 'next/image'

function Card({ title, text, image }) {

    return (
        <Grid item container columns={18} xs={18}  className="card">
            {/* <Grid item xs={18} sm={5} className="card__image" style={{ backgroundImage: `url(${image})`, backgroundPosition: title === 'MOTTO' ? 'top' : 'center' }} /> */}
            <Grid item xs={18} sm={5} className="card__image"  sx={{ "& > img": { width: "100%", height: "100%" } }}>
                <Image src={image} alt="" />
            </Grid>
            <Grid item xs={18} sm={13} className="card__content">
                <h1>{title || 'Title'}</h1>
                <p>{text || 'Text'}</p>
            </Grid>
        </Grid>
    )
}

export default Card

