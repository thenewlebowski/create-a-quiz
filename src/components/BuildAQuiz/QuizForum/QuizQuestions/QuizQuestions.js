import React from 'react'

import classes from './QuizQuestions.module.css';
import RemoveButton from '../RemoveButton/RemoveButton'

export default function QuizQuestions(props) {
    return (
        <div className={classes.Card}>
            <div className={classes.Header}>
                <h3>Question #{props.currentQuestion + 1}</h3>
                <RemoveButton 
                    remove={props.remove}
                    question={props.currentQuestion}
                />
            </div>
            
            <div className={classes.InputGroup}>
                <input
                required
                placeholder='Question'
                name='question'
                type='text'
                value={props.question}
                onChange={(e) => props.handleChange(e, props.currentQuestion)}
                />

                <input
                required
                placeholder='Anwser'
                name='answer'
                type='text'
                value={props.answer}
                onChange={(e) => props.handleChange(e, props.currentQuestion)}
                />
            </div>

            <div className={classes.InputGroup}>
                <input
                required
                placeholder='Fake Answer #1'
                name='fakeAnswer1'
                type='text'
                value={props.fakeAnswer1}
                onChange={(e) => props.handleChange(e, props.currentQuestion)}
                />

                <input
                required
                placeholder='Fake Answer #2'
                name='fakeAnswer2'
                type='text'
                value={props.fakeAnswer2}
                onChange={(e) => props.handleChange(e, props.currentQuestion)}
                />

                <input
                required
                placeholder='Fake Answer #3'
                name='fakeAnswer3'
                type='text'
                value={props.fakeAnswer3}
                onChange={(e) => props.handleChange(e, props.currentQuestion)}
                />
            </div>
        </div>
    )
}
