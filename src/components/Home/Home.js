import React from 'react'

//=====COMPONENTS=====
import HomeHeaderCard from './HomeHeaderCard/HomeHeaderCard';
import HomeMain from './HomeMain/HomeMain';

//======STYLING=======
import classes from './Home.module.css'

const Home = (props) => {
    return (
        <div>
            <div className={classes.HomeHeader}>
                <HomeHeaderCard link={'/newquiz'} name={'Start new Quiz'} />
                <div className={classes.CenterDiv}>
                    <div className={classes.VerticalLine} />
                    <p>or</p>
                    <div className={classes.VerticalLine} />
                </div>
                <HomeHeaderCard link={'/login'} name={'Login'} name2={'Sign up'} link2={'/signup'} />
            </div>
            <HomeMain />
        </div>
    )
}

export default Home;