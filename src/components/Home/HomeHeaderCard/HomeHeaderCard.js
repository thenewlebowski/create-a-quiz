import React, { Component } from 'react'
import {Link} from 'react-router-dom';

//=======REDUX=======
import { connect } from 'react-redux';
import { flashMessage } from '../../../actions/authActions'
import { bindActionCreators } from 'redux';

//========STYLING========
import classes from './HomeHeaderCard.module.css'


class HomeHeaderCard extends Component {
    render(){
        const handleClick = () =>{
            if(!this.props.auth.isAuthenticated){
                
                this.props.flashMessage('You must be logged in to do that', 'Danger')
            } 
        }
        return (
            <div className={classes.Card}>
                <div className={classes.CardInterior}>
                    <Link
                        onClick={handleClick} 
                        to={this.props.link} 
                        className={classes.Button}
                    >{this.props.name}</Link>
                    {this.props.name2 ? <Link to={this.props.link2} className={classes.Button}>{this.props.name2}</Link> : null}
                </div>
            </div>
        )
    } 
}

const mapStateToProps = state =>({
    auth: state.auth
})

const mapDispatchToProps = dispatch =>{
    return bindActionCreators({flashMessage}, dispatch)
}

export default 
connect(mapStateToProps, mapDispatchToProps) //redux mapping application state to component
(HomeHeaderCard);
