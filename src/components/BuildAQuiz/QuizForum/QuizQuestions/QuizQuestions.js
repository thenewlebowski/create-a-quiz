import React from 'react'

import classes from './QuizQuestions.module.css';

export default function QuizQuestions(props) {
    return (
        <div className={classes.Card}>
            <h3>Question #{props.currentQuestion + 1}</h3>
            <div className={classes.InputGroup}>
                <input
                required
                placeholder='Question'
                name='question'
                type='text'
                onChange={(e) => props.handleChange(e, props.currentQuestion)}
                />

                <input
                required
                placeholder='Anwser'
                name='answer'
                type='text'
                onChange={(e) => props.handleChange(e, props.currentQuestion)}
                />
            </div>

            <div className={classes.InputGroup}>
                <input
                required
                placeholder='Fake Answer #1'
                name='fakeAnswer1'
                type='text'
                onChange={(e) => props.handleChange(e, props.currentQuestion)}
                />

                <input
                required
                placeholder='Fake Answer #2'
                name='fakeAnswer2'
                type='text'
                onChange={(e) => props.handleChange(e, props.currentQuestion)}
                />

                <input
                required
                placeholder='Fake Answer #3'
                name='fakeAnswer3'
                type='text'
                onChange={(e) => props.handleChange(e, props.currentQuestion)}
                />
            </div>
        </div>
    )
}
