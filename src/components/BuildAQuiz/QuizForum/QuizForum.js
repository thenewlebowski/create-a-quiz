import React from 'react'
import classes from './QuizForum.module.css'

import QuizQuestions from './QuizQuestions/QuizQuestions'

export default function QuizForum(props) {
    let questions = props.questions.map((question, index)=>(
        <QuizQuestions
            key={index}
            currentQuestion={index} 
            handleChange={props.handleChange}
        />
    ))
    return (
        <form onSubmit={props.submit}className={classes.Form}>
            <h1>Create A New Quiz:</h1>
            <div className={[classes.InputGroup, classes.InputStyle1].join(' ')}>
                <input
                required
                placeholder='Quiz Name'
                name='name' 
                type='text'
                onChange={props.handleQuizNameChange}
                />
            </div>
            {questions}
            <div className={classes.ButtonContainer}>  
                <p onClick={props.addQuestion} className={[classes.Button, classes.ButtonYellow].join(' ')}>Add Question</p>
                <button type='submit' className={[classes.Button, classes.ButtonGreen].join(' ')}> Submit </button>
            </div>
        </form>
    )
}
