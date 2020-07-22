import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    }

    // static getDerivedStateFromProps(nextProps, prevState){
    //     if(nextProps.auth.isAuthenticated){
    //         return props.history.push('/')
    //     }
    //     if(nextProps.errors){
    //         return ({errors: nextProps.errors})
    //     }
    // }

    // componentDidUpdate(prevProps, prevState){
    //     if(prevProps.auth.isAuthenticated){
    //          this.props.history.push('/');
    //     }
    //
    //     if(nextProps.errors){
    //          this.setState({
    //              errors: nextProps.errors    
    //      })
    //    }
    // }


    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password,
        }

        this.props.loginUser(userData)
    }

    render() {
        const errors = {}
        return (
            <div className='Container'>
                <h1>Login</h1>

                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor='email'>Email: </label>
                        <span>{errors.email} {errors.emailnotfound}</span>
                        <input
                            onChange={this.handleChange}
                            value={this.state.email}
                            error={errors.email}
                            id='email'
                            type='text'
                            />
                    </div>
                    <div>
                        <label htmlFor='password'>Password:</label>
                        <span>{errors.password} {errors.passwordIncorrect}</span>
                        <input
                            onChange={this.handleChange}
                            value={this.state.password}
                            id='password'
                            type='password'
                        />
                    </div>
                    <button
                        type='submit'
                    >Login</button>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser : PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(
    mapStateToProps,
    { loginUser }
) (Login)