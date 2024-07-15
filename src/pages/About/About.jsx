import { Grid } from '@mui/material'
import React, { Fragment } from 'react'
import TopSection from '@/components/TopSection/TopSection'
import './About.css'
import circle5 from '@/assets/icons/circle5.png'
import circle2 from '@/assets/icons/circle2.png'
import circle1 from '@/assets/icons/circle1.png'
import circle4 from '@/assets/icons/circle4.png'
import microphone from '@/assets/images/microphone.png'
import { advisoryBoard, boardOfDirectors, objectives, staff } from './aboutData'
import Image from 'next/image'

function AboutPage() {

    return (
        <Fragment>
            <TopSection
                title="ABOUT THE ORGANIZATION?"
                text="The birth of the organisation came as a result of the Africa regional gender and media advocacy training seminar co-organized by the World Association for Christian Communication (WACC) and Africa Women and Child Feature Service (AWC) held in Nairobi in 2007."
                image={microphone}
            />
            <section className="about">
                <Grid container className="about__content">
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <p>During the sessions, the global regional and national findings of the GMMP were extensively reviewed, and discussions were held on how to gradually improve on the ignoble situation of media coverages of gender issues. Eventually, it was clear to me that if the GMMP which was conducted in Nigeria would have meaning as well as impact in the country, there was need to start a non-governmental organization strictly for the purpose of helping to build a gender sensitive mass media in Nigeria. So in the first week of October, 2008, the Media and Gender Enlightenment Initiative was successfully registered by Corporate Affairs Commission (CAC) in Nigeria, though its original name was Society and Media Initiative.</p>
                        
                        <h2>OBJECTIVES</h2>

                        {
                            objectives.map((item, i) => (
                                <p key={i}>{item}</p>
                            ))
                        }

                        <h2>THE TEAM</h2>

                        <h3>Advisory Board</h3>
                        <ul className="about__list">
                            {
                                advisoryBoard.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))
                            }
                        </ul>

                        <h3>Board of Directors</h3>
                        <Grid container className="about__grid" rowSpacing={1}>
                            {
                                boardOfDirectors.map((item, i) => (
                                    <Fragment key={i}>
                                        <Grid item xs={12} sm={6}>
                                            { item.name }
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            { item.role }
                                        </Grid>
                                    </Fragment>
                                ))
                            }
                        </Grid>

                        <h3>Staff</h3>

                        <Grid container className="about__grid" rowSpacing={1}>
                            {
                                staff.map((item, i) => (
                                    <Fragment key={i}>
                                        <Grid item xs={12} sm={6}>
                                            { item.name }
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            { item.role }
                                        </Grid>
                                    </Fragment>
                                ))
                            }
                        </Grid>
                    
                    
                    </Grid>
                    <Grid item xs={1} md={2} />
                </Grid>
                <Image src={circle5} alt="" className="about__circle5" />
                <Image src={circle2} alt="" className="about__circle2" />
                <Image src={circle1} alt="" className="about__circle1" />
                <Image src={circle4} alt="" className="about__circle4" />
            </section>
        </Fragment>
    )
}

export default AboutPage
