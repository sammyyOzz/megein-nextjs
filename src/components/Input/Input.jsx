import { Grid } from '@mui/material'
import React from 'react'
import './Input.css'

function Input({ half, type, name, value, handleChange, placeholder, description }) {

    return (
        <Grid item xs={ half ? 6 : 12 }>
            {
                !description 
                ?   <input 
                        className="input"
                        name={name}
                        placeholder={placeholder}
                        type={type}
                        value={value}
                        onChange={handleChange}
                        required
                    />
                :   <textarea 
                        name={name}
                        className="input__description"
                        placeholder={placeholder}
                        value={value}
                        onChange={handleChange}
                        required
                    />
            }

        </Grid>
    )
}

export default Input
