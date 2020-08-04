import React, { useEffect } from 'react'

//====STYLING====//
import classes from './Question.module.css';

export default function Question(props) {
    useEffect(()=>{
        console.log(props.answers)
    })
    
    // let randomQuestion = Math.floor(Math.random() * count) + 1

    //set answer order
    function randomAnswer(){
        let answers = [...props.answers]
        let randomArr = [];
        while (props.answers){
            let count = props.answers.length;
            let randomNumber = props.answers.slice(Math.floor(Math.random() * count) + 1, 1);
            let randomAnswer = props.answers.slice(randomNumber);
            randomArr.push(randomAnswer)
            randomArr.push(randomAnswer);
            console.log(randomAnswer);
        }

    }

    // randomQuestion();
    return (
        <div className={classes.QuestionContainer}>
            <h3>{props.question}</h3>
            <hr style={{width: '75%'}}/>
            <div className={classes.AnswersContainer}>
                {props.answers.map((answer, index)=>(
                        <p key={index}>
                            {answer.answer}
                            <input 
                            type='radio'
                            onChange={() => props.checkAnswer(index, props.questionKey)}/>
                        </p>
                ))}
            </div>
        </div>
    )
}
