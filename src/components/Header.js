import React from 'react';
import Typed from 'react-typed';

export default function Header() {
    return (
        <div className='header-wrapper'>
            <div className='main-info'>
                <h1> Web development and websites promotions </h1>
                <Typed
                    className='typed-text'
                    strings={['Web Design', 'Web Development', 'Facebook Ads SMM', 'Google Ads']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href='#' className='main-offer-button'> Contact Me </a>
            </div>
        </div>
    )
}
