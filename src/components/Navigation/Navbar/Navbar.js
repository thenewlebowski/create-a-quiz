//=====REACT====
import React from 'react'
import {Link} from 'react-router-dom'

//=====COMPONENTS======
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'

//======STYLING======
import classes from './Navbar.module.css'

export default function Navbar() {
    return (
        <div className={classes.NavbarContainer}>
            <div className={classes.Navbar}>
                <Link to='/' className={classes.Logo}>Logo</Link>
                <nav className={classes.NavLinks}>
                    <ul>
                        <li><Link to='#'>Quizes</Link></li>
                        <li><Link to='#'>Account</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/signup'>Sign Up</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
