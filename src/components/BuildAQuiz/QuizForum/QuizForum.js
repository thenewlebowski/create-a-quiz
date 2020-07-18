import React from 'react'
import classes from './QuizForum.module.css'

export default function QuizForum(props) {
    return (
        <form onSubmit={props.submit}className={classes.Form}>
            <div className={[classes.InputGroup, classes.InputStyle1].join(' ')}>

                <input
                required
                placeholder='Quiz Name'
                name='name' 
                type='text'
                onChange={props.handleQuizNameChange}
                />
            </div>

            <div className={classes.InputGroup}>
                <input
                required
                placeholder='Question'
                name='question'
                type='text'
                onChange={(e) => props.handleChange(e, props.key)}
                />

                <input
                required
                placeholder='Anwser'
                name='answer'
                type='text'
                onChange={(e) => props.handleChange(e, props.key)}
                />
            </div>

            <div className={classes.InputGroup}>
                <input
                required
                placeholder='Fake Answer #1'
                name='fakeAnswer1'
                type='text'
                onChange={(e) => props.handleChange(e, props.key)}
                />

                <input
                required
                placeholder='Fake Answer #2'
                name='fakeAnswer2'
                type='text'
                onChange={(e) => props.handleChange(e, props.key)}
                />

                <input
                required
                placeholder='Fake Answer #3'
                name='fakeAnswer3'
                type='text'
                onChange={(e) => props.handleChange(e, props.key)}
                />
            </div>
            <div className={classes.ButtonContainer}>  
                <p onClick={props.addQuestion} className={[classes.Button, classes.ButtonYellow].join(' ')}>Add Question</p>
                <button type='submit' className={[classes.Button, classes.ButtonGreen].join(' ')}> Submit </button>
            </div>
        </form>
    )
}
