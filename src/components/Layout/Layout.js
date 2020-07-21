import React from 'react'
import BuildAQuiz from '../BuildAQuiz/BuildAQuiz'
import OtherQuizes from '../OtherQuizes/Quizes'

import classes from './Layout.module.css';

export default function Layout() {
    return (
        <div>
            <h1>Navbar</h1>
            <main>
                <BuildAQuiz />
            </main>
            <footer className={classes.Footer}>
                <OtherQuizes />
            </footer>
        </div>
    )
}
