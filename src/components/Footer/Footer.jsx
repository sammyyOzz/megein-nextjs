import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { navData } from '../Navigation/navData'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__linksContainer">
                {
                    navData.map((item, i) => (
                        <Link to={item.link} key={i}>
                            { item.name }
                        </Link>
                    ))
                }
            </div>
            <p>Copyright 2021 Media and Gender Enlightenment Initiative (MEGEIN). All Rights Reserved.</p>
            <p style={{ marginTop: '10px' }}>Powered by Trevlo Technologies Limited</p>
        </div>
    )
}

export default Footer
