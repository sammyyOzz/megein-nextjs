import { Grid } from '@mui/material'
import React from 'react'
import Card from '../Card/Card'
import './WhatWeDo.css'
import { whatWeDoData } from './whatWeDoData'
import circle1 from '../../assets/icons/circle1.png'
import circle2 from '../../assets/icons/circle2.png'
import circle3 from '../../assets/icons/circle3.png'
import circle4 from '../../assets/icons/circle4.png'
import Image from 'next/image'


function WhatWeDo() {

    return (
        <section className="whatWeDo">
            <Grid container columns={18}>
                <Grid item xs={1} md={2} lg={4} />
                <Grid item xs={18} md={4} lg={3} className="whatWeDo__title">
                    <h1>WHAT WE DO ?</h1>
                </Grid>
                <Grid item container xs={14} md={11} lg={9} rowSpacing={12}>
                    {
                        whatWeDoData.map((item, i) => (
                            <Card
                                key={i}
                                title={item.title}
                                text={item.text}
                                image={item.image}
                            />
                        ))
                    }
                </Grid>
                <Grid item xs={1} md={1} lg={2} />
            </Grid>
            <Image src={circle1} alt="" className="whatWeDo__circle1" />
            <Image src={circle2} alt="" className="whatWeDo__circle2" />
            <Image src={circle3} alt="" className="whatWeDo__circle3" />
            <Image src={circle4} alt="" className="whatWeDo__circle4" />
        </section>
    )
}

export default WhatWeDo
