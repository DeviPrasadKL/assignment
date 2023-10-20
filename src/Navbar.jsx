import React, { useState } from 'react';
import { Link } from "react-router-dom";
import menu from './assets/menu-4-64.png';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const openOptions = () => {
        setOpen(!open);
    }

    return (
        <nav>
            <div className='in'>
                <img src={menu} alt="" style={{ height: "3rem" }} onClick={openOptions} />
                <div className='ab' style={{ display: open ? "flex" : "none" }} >
                    <h3 className='options' >Home</h3>
                    <h3 className='options' >About</h3>
                </div>
            </div>
            <div className='in' >
                <h2>
                    <Link to="/login" style={{ marginRight: "2rem", textDecoration:"none" }}>Login</Link>
                </h2>
                <h2>
                    <Link to="/logout" style={{textDecoration:"none"}}>Logout</Link>
                </h2>
            </div>
        </nav>
    );
}
