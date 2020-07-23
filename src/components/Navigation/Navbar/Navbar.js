//=====REACT====
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

//======REDUX======
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';

//=====COMPONENTS=====
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'

//======STYLING======
import classes from './Navbar.module.css'

const Navbar  = (props) => {
    
    const onLogoutClick = e => {
        e.preventDefault()
        props.logoutUser();
    }

    return (
        <div className={classes.NavbarContainer}>
            <div className={classes.Navbar}>
                <Link to='/' className={classes.Logo}>Logo</Link>
                <nav className={classes.NavLinks}>
                    <ul>
                        <li><Link to='#'>Quizes</Link></li>
                        <li><Link to='#'>Account</Link></li>
                        {props.auth.isAuthenticated === false ? 
                            <Auxiliary>
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/signup'>Sign Up</Link></li>
                            </Auxiliary> : 
                                <li><Link to='#' onClick={onLogoutClick}>Logout</Link></li>
                        }
                        
                    </ul>
                </nav>
            </div>
        </div>
    )
}

Navbar.propTypes ={
    logoutUser : PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(
    mapStateToProps,
    { logoutUser }
) (Navbar);
