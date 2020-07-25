import React, {Component} from 'react';
import { Link } from 'react-router-dom'

//=====REDUX=====
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { flashMessage } from '../../actions/authActions';

//=====COMPONENTS=====
import HomeMain from './HomeMain/HomeMain';
import HomePageFooter from '../OtherQuizes/Quizes'

//======STYLING=======
import classes from './Home.module.css'

class Home extends Component {
    handleClick = () =>{
        if(!this.props.auth.isAuthenticated){
            console.log('[Authenticated]')
            this.props.flashMessage('Please log in to continue', 'Danger')
            const timer = setInterval(()=> {
                this.props.flashMessage(null, 'Danger')
                clearInterval(timer);
                }
                , 5000)
        }
    }

    render(){
        return (
            <div>
                <div className={classes.HomeHeader}>
                    <div className={classes.Card}>
                        <div className={classes.CardInterior}>
                            <Link
                                onClick={this.handleClick} 
                                to={'/newquiz'} 
                                className={classes.Button}
                            >New Quiz</Link>
                            {/* {this.this.props.name2 ? <Link to={this.this.props.link2} className={classes.Button}>{this.this.props.name2}</Link> : null} */}
                        </div>
                    </div>
                    {/* <HomeHeaderCard link={'/newquiz'} name={'Start new Quiz'} /> */}
                    <div className={classes.CenterDiv}>
                        <div className={classes.VerticalLine} />
                        <p>or</p>
                        <div className={classes.VerticalLine} />
                    </div>
                    <div className={classes.Card}>
                        <div className={classes.CardInterior}>
                            <Link
                                to={'/login'} 
                                className={classes.Button}
                            >Login</Link>
                            <Link 
                                to={'/signup'} 
                                className={classes.Button}
                            > Sign Up</Link>
                        </div>
                    </div>
                    {/* <HomeHeaderCard link={'/login'} name={'Login'} name2={'Sign up'} link2={'/signup'} /> */}
                </div>
                <HomeMain />
                <HomePageFooter />
            </div>
        )
    }
}

const mapStatetoProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = dispatch =>{
    return bindActionCreators({flashMessage}, dispatch)
}

export default connect
( mapStatetoProps, mapDispatchToProps) 
( Home )