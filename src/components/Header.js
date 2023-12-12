import {LOGO_URL} from '../utils/constants';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () =>{
    const [btnName,setBtnName]= useState('Login')
    console.log('Hearder Render');
    // if there is no dependency  array = useeffect will call every render
    // if there is dependency array =[] = useeffect will be called only once
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className='login-btn'
                    onClick={()=>
                    btnName=='Login' ? setBtnName('Logout'): setBtnName('Login')
                    }
                    >{btnName}</button>
                </ul>
            </div>

        </div>
    )
}
const test =0;
export default Header;
export {test}