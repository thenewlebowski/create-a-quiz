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
                    questions: [],
                    author: res.data.author,
                    loading: false
                })
            })
    }

    render() {
        let questions = (
            <div>
                {this.state.questions.map(question => (
                    <Question 
                        question={question.question}
                        anwser={question.anwser}
                        fakeAnwser1={question.fakeAnwser1}
                        fakeAnwser2={question.fakeAnwser2}
                        fakeAnwser3={question.fakeAnwser3}
                    />
                ))}
            </div>
        )
        let quiz = null
        if(this.state.loading === false)(
            quiz = (
            <div>
                <h1>{this.state.name}</h1>
                <div>{questions}</div>
                <div>
                   <p>made by {this.state.author.username}</p> 
                </div>
            </div>
            )
        )
        return (
            <Auxiliary>
                {quiz}
                
            </Auxiliary>
        )  
    }
}
