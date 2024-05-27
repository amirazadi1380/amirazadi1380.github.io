import React from 'react'
import pic from '../assets/pic1.jpg'
import grenade from '../assets/grenade.png'
import glass from '../assets/glass.png'
import bag from '../assets/bag.png'
import miz from '../assets/miz.png'

export default function Category () {
  return (
    <div className='category_container'>
        <div className="category">
        <img src={pic} alt="pic"  className='pic'/>
        <div className="all_pro">
        <div className='topics'>
            <div className="topic">
                <img src={grenade} alt="grenade" />
                <h1>زیبایی و سلامت</h1>
            </div>
            <div className="topic selected">
            <img src={glass} alt="glass" />
                <h1>مد و فشن</h1>
            </div>
            <div className="topic">
            <img src={bag} alt="bag" />
            <h1>ورزش و سفر</h1>
            </div>
            <div className="topic">
            <img src={miz} alt="miz" />
            <h1>لوازم خانگی</h1>
            </div>
        </div> 
        <button className="btn">مشاهده همه محصولات</button>
         </div>
        </div>
    </div>
  )
}
