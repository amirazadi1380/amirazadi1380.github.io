import React, { useState } from 'react'
import user from '../assets/user.png'
import heart from '../assets/heart.png'
import search from '../assets/search.png'
import bars from '../assets/bars.png'
import shop from '../assets/shop.png'
import logo from '../assets/logo.png'

export default function Navbar() {
    const [isOpen,setIsOpen] = useState(false)

    const handleClick = () =>{
        setIsOpen((prev)=>!prev)
    }
  return (
    <nav className='nav_container'>
            <div className='nav_items'>
                <img src={shop} alt="shop" />
                <img src={heart} alt="heart" />
                <img src={user} alt="user" />
            </div>
            <ul className='nav_ul' >
                <li className='nav_li'>تماس با ما</li>
                <li className='nav_li'>داستان ما</li>
                <li className='nav_li'>بلاگ</li>
                <li className='nav_li active'>خانه</li>
            </ul>
            <img src={logo} alt="logo" className='logo' />
            <div className='bar'>
                <img src={search} alt="search" />
                <img src={bars} alt="bars" onClick={handleClick}/>
            </div>
            {isOpen ? <ul className='open_nav_ul'>
                    <li className='open_nav_li'>بلاگ</li>
                    <li className='open_nav_li'>داستان ما</li>
                    <li className='open_nav_li'>تماس با ما</li>
                    <div className='open_nav_item'>
                        <li className='open_nav_li'>!فروشنده شوید</li>
                        <img src={shop} alt="shop" />
                    </div>
            </ul> : null}
    </nav>
  )
}
