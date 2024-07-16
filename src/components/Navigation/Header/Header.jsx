"use client";

import React from 'react'
import { navData } from '../navData'
import './Header.css'
import MobileNav from '../Mobile/MobileNav'
import logo from '../../../assets/images/logo.jpg'
import Image from 'next/image'
import Link from 'next/link'
// import { useRouter } from 'next/router'

function Header() {
    // const { pathname } = useRouter();

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__left">
                    {/* <img src={logo} alt="" /> */}
                    <Image src={logo} alt="" />
                    <span>MEGEIN</span>
                </div>
                <div className="header__right">
                    {
                        navData.map((item, i) => (
                            <Link 
                                key={i} 
                                href={item.link} 
                                // activeClassName="header__activeLink"
                            >
                                { item.name }
                            </Link>
                        )) 
                    }
                    <MobileNav pathname={"/"} />
                </div>
            </div>
        </header>
    )
}

export default Header
