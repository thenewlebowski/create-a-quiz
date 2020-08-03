import React from 'react'

import classes from './QuizQuestions.module.css';

//=====COMPONENTS=====//
import RemoveButton from '../RemoveButton/RemoveButton'

export default function QuizQuestions(props) {
    let count = 1;
    let quizAnswers = (
        <div className={classes.Answers}>
            {props.answers.map((answer, index) => (
                <div key={index} >
                        <h5 className={classes.Label}>Answer #{count++}:
                            <input
                                type='radio'
                                value='correctAnswer'
                                checked={props.answers[index].correctAnswer}
                                onChange={(e)=>props.handleTruthChange(e, index, props.currentQuestion)}
                            />
                        </h5>
                        
                        <input
                            type='text'
                            key={index}
                            value={props.answers[index].answer}
                            onChange={(e) => props.handleAnswerChange(e, index, props.currentQuestion)}
                        />
                        
                </div>
            ))
            }
        </div>
    )
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
                <div>
                    <label className={classes.Label} htmlFor='question'>Question</label>
                    <input
                        name='question' 
                        type='text'
                        value={props.question}
                        onChange={(e) => props.handleQuestionNameChange(e, props.currentQuestion)}
                    />
                </div>
            </div>
            {quizAnswers}
        </div>
    )
}
