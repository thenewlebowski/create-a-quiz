//=======REACT/REDUX=======//
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {flashMessage as flash} from '../../actions/authActions';

//========COMPONTENT=======//
import { Transition, animated } from 'react-spring/renderprops'

import classes from './FlashMessage.module.css';

class FlashMessage extends Component {
    render() {
        const {message, className} = this.props.flashMessage
        let assignClasses = [classes.FlashMessage, classes[className]];
        if(!message){
            setInterval(()=>{
                return null
            }, 5000)   
        }
        return (
            <Transition
                items={message}
                from={{ transform: 'translate3d(0,-400px,0)' }}
                enter={{ transform: 'translate3d(0,-60px,0)' }}
                leave={{ transform: 'translate3d(0,-400px,0)'}}
            >
                {message =>
                    message && ( props=>
                    <animated.div style={props}>
                        <div className={assignClasses.join(' ') }>
                            <p>{message}</p>
                        </div>
                    </animated.div>)
                }
            </Transition>
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
