import React from 'react'
import home from '../assets/home-2.png'
import user from '../assets/user.png'
import shop from '../assets/shop.png'
import category from '../assets/category.png'
export default function FooterNav() {
  return (
    <div className='footer'>
        <div className='each'>
            <img src={user} alt="category" />
            <h1>دسته بندی ها</h1>
        </div>
        <div className='each'>
            <img src={shop} alt="shop" />
            <h1>سبد خرید</h1>
        </div>
        <div className='each'>
            <img src={user} alt="user" />
            <h1>پروفایل</h1>
        </div>
        <div className='each'>
            <img src={shop} alt="home"/>
            <h1>خانه</h1>
        </div>
    </div>
  )
}
