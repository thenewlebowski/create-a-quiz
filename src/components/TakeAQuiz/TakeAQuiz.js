import React, { Component } from 'react';
import axios from 'axios';

//=======COMPONENTS=======//
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Question from './Question/Question';

//=======STYLING=========//
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

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
        //check answer w/ key
        console.log(this.state.questions[questionKey].answers)
        if(this.state.questions[questionKey].answers[key].true === true){
            alert('TRUE');
        } else {
            alert('FALSE');
        }

        //set previous selection 
    }

    render() {

        let questions = null;
        let quiz = null;

        if(!this.state.loading){
            quiz = (
                <div>
                    <h1>{this.state.name.toUpperCase()}</h1>
                    <div>
                        <p>made by {this.state.author.username}</p> 
                    </div>
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
                {quiz}
                {questions}
            </Auxiliary>
        )  
    }
}
