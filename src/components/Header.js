import {LOGO_URL} from '../utils/constants';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import userContext from '../utils/userContext';
import { useSelector } from 'react-redux';
const Header = () =>{
    const [btnName,setBtnName]= useState('Login')
    console.log('Hearder Render');
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(userContext);
    const cartItems = useSelector((store)=> store.cart.items)
    // if there is no dependency  array = useeffect will call every render
    // if there is dependency array =[] = useeffect will be called only once
    return (
        <div className="flex justify-between px-4">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4 '>
                    <li className='px-4'><Link to="/">Home</Link></li>
                    <li className='px-4 cursor-pointer'><Link to="/about">About Us</Link></li>
                    <li className='px-4'><Link to="/grocery">Grocery</Link></li>
                    <li className='px-4'><Link to="/contact">Contact Us</Link></li>
                    <li>{loggedInUser}</li>
                    <li className='px-4'>online Status- {onlineStatus==true?"✅" :"🔴" }</li>
                    <li className='px-4'>
                    <Link to="/cart">Cart -{cartItems.length}</Link>
                    </li>
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