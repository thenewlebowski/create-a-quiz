import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { flashMessage } from '../../actions/authActions'

const PrivateRoute = ({ component: Component, auth, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            auth.isAuthenticated === true ? (
                <Component {...props} />
            ) : (
                <Redirect to={{pathname: '/login', loggedIn :auth.isAuthenticated}} />
            )}
    />
)

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth
});

const mapPropsToDispatch = (dispatch) => {
    return bindActionCreators({flashMessage}, dispatch)
}

export default connect(mapStateToProps, mapPropsToDispatch) (PrivateRoute);