import React from 'react'
import classes from './QuizForum.module.css'

export default function QuizForum(props) {
    return (
        <form onSubmit={props.submit}className={classes.Form}>
            <h1>Create A New Quiz:</h1>
            <div className={classes.InputGroup}>

                <input
                placeholder='Quiz Name'
                name='name' 
                type='text'
                onChange={props.handleChange}
                />
                

                <input
                placeholder='Question'
                name='question'
                type='text'
                onChange={props.handleChange}
                />

            </div>

            <div className={classes.InputGroup}>
                <input
                placeholder='Anwser'
                name='answer'
                type='text'
                onChange={props.handleChange}
                />
            </div>

            <div className={classes.InputGroup}>
                <input
                placeholder='Fake Answer #1'
                name='fakeAnswer1'
                type='text'
                onChange={props.handleChange}
                />

                <input
                placeholder='Fake Answer #2'
                name='fakeAnswer2'
                type='text'
                onChange={props.handleChange}
                />

                <input
                placeholder='Fake Answer #3'
                name='fakeAnswer3'
                type='text'
                onChange={props.handleChange}
                />
            </div>
            <button className={[classes.Button, classes.ButtonGreen].join(' ')}> Submit </button>
        </form>
    )
}
