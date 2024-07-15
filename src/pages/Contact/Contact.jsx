"use client"

import React, { Fragment, useReducer, useRef, useState } from 'react'
import TopSection from '@/components/TopSection/TopSection'
import contactPageImage from '@/assets/images/contactPageImage.png'
import { Grid } from '@mui/material'
import './Contact.css'
import Input from '@/components/Input/Input'
import Button from '@/components/Button/Button'
import circle3 from '@/assets/icons/circle3.png'
import circle4 from '@/assets/icons/circle4.png'
import circle5 from '@/assets/icons/circle5.png'
import circle2 from '@/assets/icons/circle2.png'
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@/components/Snackbar/Snackbar'
import emailjs from 'emailjs-com'
import Image from 'next/image'


const contactReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return { ...state, loading: true }
        
        case 'SUCCESS':
            return { severity: 'success', open: true, loading: false, feedbackMessage: action.feedbackMessage }

        case 'ERROR':
            return { severity: 'error', open: true, loading: false, feedbackMessage: action.feedbackMessage }

        case 'CLOSE_SNACKBAR':
            return { ...state, open: false, loading: false, feedbackMessage: '' } 

        default:
            return state
    }
}

function ContactPage() {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', description: '' })
    const [contactUs, dispatchContactUs] = useReducer(contactReducer, { open: false, feedbackMessage: '', severity: '', loading: false })
    const { open, feedbackMessage, severity, loading } = contactUs

    const handleChange = e => {
        setFormData(prevState => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        dispatchContactUs({ type: 'CLOSE_SNACKBAR' })
    };

    const form = useRef()

    const handleSubmit = e => {
        e.preventDefault()

        dispatchContactUs({ type: "LOADING" })

        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_USER_ID)
        .then(() => {
            dispatchContactUs({ type: "SUCCESS", feedbackMessage: 'Your message has been sent successfully!' })
            setFormData({ firstName: '', lastName: '', email: '', description: '' })
        }, () => {
            dispatchContactUs({ type: "ERROR", feedbackMessage: 'An error occurred, please try again later.' })
        });
    }

    return (
        <Fragment>
            <TopSection 
                title="GET IN TOUCH"
                // text="Lorem ipsum dolor sit amet, consectetu r adipiscing elitPraesent 
                // rutrum a turpis vel iaculis. Morbi ac lorem sitamet sem finib
                // Lorem ipsum dolor sit amet, cor adipiscing elitPraesent rutrum a 
                // turpis vel iaculis. Morbi ac"
                image={contactPageImage}
            />
            <section className="contact">
                <h1>CONTACT US</h1>
                <form onSubmit={handleSubmit} ref={form}>
                    <Grid container>
                        <Grid item xs={1} sm={2} md={4} />
                        <Grid item container spacing={2} xs={10} sm={8} md={4}>
                            <div className="contact__details">
                                <p><strong>Name:</strong> Assoc. Prof. Nkem Fab-Ukozor</p>
                                <p><strong>Phone Number:</strong> +234 (0) 8033311410</p>
                                <p><strong>Address:</strong> Media and Gender Enlightenment Initiative
                                c/o Department of Mass Communication,
                                Imo State University,
                                P.M.B. 2000, Owerri. Nigeria.
                                E-mail: fabukozor2000@yahoo.com</p>
                                <h2>Send us a message</h2>
                            </div>
                            <Input 
                                half 
                                type="text"
                                name="firstName"
                                placeholder="First name"
                                value={formData.firstName}
                                handleChange={handleChange}
                            />
                            <Input 
                                half 
                                type="text"
                                name="lastName"
                                placeholder="Last name"
                                value={formData.lastName}
                                handleChange={handleChange}
                            />
                            <Input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                handleChange={handleChange}
                            />
                            <Input 
                                description 
                                name="description"
                                placeholder="Description"
                                value={formData.description}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={1} sm={2} md={4} />
                    </Grid>
                    <div className="contact__buttonContainer">
                        <Button type="submit">{ !loading ? "Submit": <CircularProgress size={25} sx={{ color: 'white' }} /> }</Button>
                    </div>
                </form>
                <Image src={circle3} alt="" className="contact__circle3" />
                <Image src={circle4} alt="" className="contact__circle4" />
                <Image src={circle5} alt="" className="contact__circle5" />
                <Image src={circle2} alt="" className="contact__circle2" />
            </section>
            <Snackbar open={open} handleClose={handleClose} severity={severity} message={feedbackMessage} />
        </Fragment>
    )
}

export default ContactPage
