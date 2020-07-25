//=======REACT/REDUX=======//
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {flashMessage as flash} from '../../actions/authActions';

import classes from './FlashMessage.module.css';

class FlashMessage extends Component {
    render() {
        const {message, className} = this.props.flashMessage
        let assignClasses = [classes.FlashMessage, classes[className]];
        if(!message || message === ''){
            return null
        }
        return (
            <div className={assignClasses.join(' ') }>
                <p>{message}</p>
            </div>
        )
    }
}

const mapStateToProps = ({flashMessage}) =>{
    return {flashMessage};
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({flash}, dispatch)
}

export default connect
(mapStateToProps, mapDispatchToProps)
(FlashMessage)
