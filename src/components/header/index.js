import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='logo'>KrealAx</div>
            <div>
                <label for='app'>app mode</label>
                <input type='radio' name='app'/>
            </div>
        </div>
    )
}

export default Header
