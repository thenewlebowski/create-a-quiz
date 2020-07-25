import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//=======REDUX=======
import { connect } from 'react-redux';
import { registerUser } from '../../../actions/authActions'

//======STYLING======
import classes from './Register.module.css'

class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }

    handleChange = e =>{
        this.setState({ [e.target.id] : e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        }

        this.props.registerUser(newUser, this.props.history)
    }
    render() {
        const { errors } = this.state;

        return(
            <div className={classes.Container}>
                <form className={classes.Form} noValidate onSubmit={this.handleSubmit}>
                    <h1>Register</h1>
                    <div className={classes.FormGroup}>
                        <label htmlFor='name'>Name: </label>
                        <span>{errors.name}</span>
                        <input
                            type='text'
                            id='name'
                            value={this.state.name}
                            error={errors.name}
                            onChange={this.handleChange}
                        />
                    </div> 
                    <div className={classes.FormGroup}>  
                        <label htmlFor='email'>Email: </label>
                        <span>{errors.email}</span>
                        <input 
                            onChange={this.handleChange}
                            value={this.state.email}
                            error={ errors.email }
                            id='email'
                            type='email'
                        />
                    </div>
                    <div className={classes.FormGroup}>
                        <label htmlFor='password'>Password: </label>
                        <span>{errors.email}</span>
                        <input 
                            onChange={this.handleChange}
                            value={this.state.password}
                            error={ errors.password }
                            id='password'
                            type='password'
                        />
                    </div>
                    <div className={classes.FormGroup}>
                        <label htmlFor='password2'>Confirm Password: </label>
                        <span>{errors.password2}</span>
                        <input
                            type='password'
                            id='password2'
                            onChange={this.handleChange}
                            value={this.state.password2}
                            error={errors.password2}
                        />
                    </div>
                    <button
                        type='submit'
                    >
                        Sign Up
                    </button>
                    <p>or if you already have an account <Link to='/login'>login.</Link></p>
                </form>
            </div>   
        )
    }
}

Register.proptype = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});


export default connect(
    mapStateToProps,
    {registerUser}
) (withRouter(Register))
