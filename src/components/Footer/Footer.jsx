import React from 'react'
import './Footer.css'
import { navData } from '../Navigation/navData'
import Link from 'next/link'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__linksContainer">
                {
                    navData.map((item, i) => (
                        <Link href={item.link} key={i}>
                            { item.name }
                        </Link>
                    ))
                }
            </div>
            <p>Copyright {new Date().getFullYear()} Media and Gender Enlightenment Initiative (MEGEIN). All Rights Reserved.</p>
            <p style={{ marginTop: '10px' }}>Powered by Trevlo Technologies Limited</p>
        </div>
    )
}

export default Footer
