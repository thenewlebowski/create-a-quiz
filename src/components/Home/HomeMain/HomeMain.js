import React from 'react'

//=======STYLING======
import classes from './HomeMain.module.css'

export default function HomeMain() {
    return (
        <div className={classes.HomeMain}>
            <div className={classes.InteriorCard}>
                <h1>Lorem Ipsum</h1>
                <h3>Lorem ipsum dolor sit amet, consectetuer</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
            </div>
        </div>
    )
}
