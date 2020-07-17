import React from 'react'
import BuildAQuiz from '../BuildAQuiz/BuildAQuiz'

export default function Layout() {
    return (
        <div>
            <h1>Navbar</h1>
            <main>
                <BuildAQuiz />
                <h3>Be able to explore other quizes below</h3>
            </main>
        </div>
    )
}
