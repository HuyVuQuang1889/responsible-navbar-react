import React, { useState }from 'react';
import MenuItems from './MenuItems.js'
import Button from './Button'
import './Nav.css'

function Nav() {
    const [clicked, setClicked] = useState(false)
    const handleClicked = () => setClicked(!clicked)
    return( 
        <nav className="nav-container">
            <div className="menu-logo">NAVIGATOR</div>
            <div className="menu-icon" onClick={handleClicked}>
                {/* <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i> */}
                <span/>
                <span/>
                <span/>
            </div>
            <ul className={clicked ? 'menu-items active' : 'menu-items'}>
                {MenuItems.map((item, index) => 
                    <li  key={index}>
                        <a className={item.cName} href={item.url}>{item.content}</a>
                    </li>
                )}
            </ul>
            <Button>Sign Up</Button>
        </nav>
    )
}

export default Nav;
