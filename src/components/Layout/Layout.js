//========REACT=========
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//=======COMPONENTS=======
import BuildAQuiz from '../BuildAQuiz/BuildAQuiz';
import OtherQuizes from '../OtherQuizes/Quizes';
import Navbar from '../Navigation/Navbar/Navbar';
import Home from '../Home/Home'
import Login from '../auth/Login'
//=======REDUX=======
import { Provider } from 'react-redux';
import store from '../../store';

//======JWT-DECODE======
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
import { setCurrentUser, logoutUser, loginUser } from '../../actions/authActions';

//======STYLING=======
import classes from './Layout.module.css';

//Check to see if token exists to keep user logged in
if(localStorage.jwtToken){
    const token = localStorage.jwtToken;
    setAuthToken(token);
    //Decode token and get user info and exp
    const decoded = jwt_decode(token);
    //Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    //Check for expired token
    const currentTime = Date.now() / 1000; // current time to milliseconds
    if(decoded.exp < currentTime){
        //Logout user
        store.dispatch(logoutUser());
        //Redirect to login
        window.location.href='./login'
    }

}

export default function Layout() {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/newquiz'} component={BuildAQuiz} />
                <Route exact path={'/login'} component={Login} />
            </Router>
        </Provider>
        // <div>
        //     <h1>Navbar</h1>
        //     <main>
        //         <BuildAQuiz />
        //     </main>
        //     <footer className={classes.Footer}>
        //         <OtherQuizes />
        //     </footer>
        // </div>
    )
}
