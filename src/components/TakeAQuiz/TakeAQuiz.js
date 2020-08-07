import React, { Component } from 'react';
import axios from 'axios';

//=======COMPONENTS=======//
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Question from './Question/Question';

//=======STYLING=========//
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import classes from './TakeAQuiz.module.css';

export default class TakeAQuiz extends Component {
    state = {
        name: '',
        questions: [],
        author : {
            id: '',
            userName: '',
        },
        loading: true
        
    }

    componentDidMount(){
        axios.get('/api/quizes/' + this.props.match.params.id)
            .then( res => {
                this.setState({
                    name: res.data.name,
                    questions: res.data.questions,
                    author: res.data.author,
                    loading: false
                })
            })
        
    }

    //handle statement is true/false
    handleCheckAnswer = (key, questionKey) => {
        let currentanswerKey = this.state.questions[questionKey].answers[key].true
        //check answer w/ key
        console.log(this.state.questions[questionKey].answers[key])
        if(this.state.questions[questionKey].answers[key].correctAnswer === true){
            alert('TRUE');
        } else {
            alert('FALSE');
        }
        //push classes to selected answer

        //set previous selection

    }

    render() {

        let questions = null;
        let quizHeader = null;

        if(!this.state.loading){
            quizHeader = (
                <div className={classes.Header}>
                    <h1>{this.state.name.toUpperCase()}</h1>
                    <p><i>made by {this.state.author.username}</i></p>   
                </div>
            )
                
            questions = (
                <div>
                    {this.state.questions.map((question,index) => (
                        <Question
                            key = {index}
                            questionKey = {index}
                            checkAnswer = {this.handleCheckAnswer}
                            question={question.question}
                            answers={question.answers}
                        />
                    ))}
                </div>
            )
        }
        return (
            <Auxiliary>
                {quizHeader}
                {questions}
            </Auxiliary>
        )  
    }
}
