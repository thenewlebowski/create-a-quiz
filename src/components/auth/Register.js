import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions'

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
            <div> 
                <h1>Register</h1>

                <form noValidate onSubmit={this.handleSubmit}>
                    <div>
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

                    <div>
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

                    <div>
                        <label htmlFor='password'>Password: </label>
                        <span>{errors.email}</span>
                        <input 
                            onChange={this.handleChange}
                            value={this.state.email}
                            error={ errors.password }
                            id='password'
                            type='password'
                        />
                    </div>
                    
                    <div>
                        <label htmlFor='password2'>Confirm Password: </label>
                        <span>{errors.password2}</span>
                        <input
                            type='text'
                            id='password2'
                            onChange={this.handleChange}
                            value={this.state.password2}
                            error={errors.password2}
                        />
                    </div>
                    
                    <div>
                        <button
                            type='submit'
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

Register.proptypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropsTypes.object.isRequired
}

const mapStateToProps = state = ({
    auth: state.auth,
    errors: state.errors
})

export default connect(
    mapStateToProps,
    {registerUser}
) (withRouter(Register))
