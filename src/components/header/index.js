import React from 'react';
import './header.css';

const Header = ({action}) => {
    return (
        <div className='header-wrapper'>
            <div className='logo'>KrealAx</div>
            <div className='radio-wrapper' onChange={(e) => {
                action(e.target.value)
            }}>
                <input type="radio" value="app" name="mode" defaultChecked/> app mode
                <input type="radio" value="admin" name="mode"/> admin mode
            </div>
        </div>
    )
}

export default Header
