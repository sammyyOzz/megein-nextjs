import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navData } from '../navData'
import './Header.css'
import MobileNav from '../Mobile/MobileNav'
import logo from '../../../assets/images/logo.jpg'

function Header() {
    const { pathname } = useLocation()

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__left">
                    <img src={logo} alt="" />
                    <span>MEGEIN</span>
                </div>
                <div className="header__right">
                    {
                        navData.map((item, i) => (
                            <NavLink key={i} exact to={item.link} activeClassName="header__activeLink">
                                { item.name }
                            </NavLink>
                        )) 
                    }
                    <MobileNav pathname={pathname} />
                </div>
            </div>
        </header>
    )
}

export default Header
