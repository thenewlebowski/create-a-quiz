import React, { Component } from 'react'

//Components
import BuildAQuizButton from './BuildAQuizButton/BuildAQuizButton'
import QuizForum from './QuizForum/QuizForum'

export default class BuildAQuiz extends Component {

    state = {
        quizForum: {
            name: '',
            question: '',
            answer: '',
            fakeAnswer1: '',
            fakeAnswer2: '',
            fakeAnswer3: '',
        },
        isQuizForumVisible: false
    }

    handleQuizVisible = () => {
        this.setState( prevState => ({isQuizForumVisible: !prevState.isQuizForumVisible}))
    }

    handleChange = (e) => {
        this.setState({quizForum : {
            ...this.state.quizForum,
            [e.target.name] : e.target.value
        }})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.quizForum)
    }

    render() {
        let quizForum = null;
        if(this.state.isQuizForumVisible){
            quizForum = (
                <QuizForum
                submit = {this.handleSubmit}
                handleChange={this.handleChange}/>
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
