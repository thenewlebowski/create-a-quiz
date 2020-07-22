import React from 'react'

//=====COMPONENTS=====
import HeaderCard from './HomeHeaderCard/HomeHeaderCard'

//======STYLING=======
import classes from './Home.module.css'

const Home = (props) => {
    return (
        <div>
            <div className={classes.HomeHeader}>
                <HeaderCard link={'/newquiz'} name={'Start new Quiz'} />
                <div className={classes.CenterDiv}>
                    <div className={classes.VerticalLine} />
                    <p>or</p>
                    <div className={classes.VerticalLine} />
                </div>
                <HeaderCard link={'/login'} name={'Login'} name2={'Sign up'} link2={'/signup'} />
            </div>
        </div>
    )
}

export default Home;