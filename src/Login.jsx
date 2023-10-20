import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className='login'>
            <button>
                <Link to="/" style={{ textDecoration: "none" }}>Logout</Link>
            </button>
        </div>
    );
}
