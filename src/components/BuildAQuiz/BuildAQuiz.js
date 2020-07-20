import React, { Component } from 'react'
import axios from 'axios'


//Components
import BuildAQuizButton from './BuildAQuizButton/BuildAQuizButton'
import QuizForum from './QuizForum/QuizForum'

export default class BuildAQuiz extends Component {

    state = {
        quizForum: {
            name: '',
            questions: [
                    {
                        question: '',
                        answer: '',
                        fakeAnswer1: '',
                        fakeAnswer2: '',
                        fakeAnswer3: '',
                    }, 
                ],
        },
        isQuizForumVisible: true,
    }

    handleQuizVisible = () => {
        this.setState( prevState => ({isQuizForumVisible: !prevState.isQuizForumVisible}))
    }

    handleChange = (e, key) => {
        //Make shallow copy of the questions array
        let currArr = [
            ...this.state.quizForum.questions,        
        ]

        //Copy to a different variable the specific quiz that you would like to edit
        let currQuiz = {
            ...currArr[key],
            [e.target.name] : e.target.value
        }
        
        //Save the edited quizQuestion to your copy of the array
        currArr[key] = currQuiz;

        this.setState({
            quizForum: {
                questions: currArr
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.quizForum)

        const quiz = {
            name : this.state.quizForum.name,
            questions : this.state.quizForum.questions
        }

        axios.post('api/quizes/add', quiz)
            .then( res => console.log(res.data))

        this.setState({
            quizForum: {
                name: '',
                questions:[
                    {
                        question: '',
                        answer: '',
                        fakeAnswer1: '',
                        fakeAnswer2: '',
                        fakeAnswer3: '',
                    }
                 ],
            },
            isQuizForumVisible: false
        })
    }

    handleQuizNameChange = (e) => {
        this.setState({quizForum:{
            ...this.state.quizForum,
            name: e.target.value
        }})
    }

    handleAddQuestion = () =>{
        const questionTemplate = {
            question: '',
            answer: '',
            fakeAnswer1: '',
            fakeAnswer2: '',
            fakeAnswer3: '',
        }
        this.setState({
            quizForum: {
                questions: [
                    ...this.state.quizForum.questions,
                    questionTemplate
                ]
            }
        })
    }

    handleRemoveQuestion = (question) => {
        let currArr = [
            ...this.state.quizForum.questions
        ]

        currArr.splice(question, 1)

        this.setState({
            quizForum:{
                questions: currArr
            }
        })
    }

    render() {
        let quizForum = null;
        if(this.state.isQuizForumVisible){
            quizForum = (
                <QuizForum
                    handleQuizNameChange={this.handleQuizNameChange}
                    submit = {this.handleSubmit}
                    handleChange={this.handleChange}
                    addQuestion = {this.handleAddQuestion}
                    questions={this.state.quizForum.questions}
                    remove={this.handleRemoveQuestion}
                />
            )
        }
        return (
            <div>
                <BuildAQuizButton 
                    clicked={this.handleQuizVisible} 
                    visible={!this.state.isQuizForumVisible}
                />
                {quizForum}
            </div>
        )
    }
}
