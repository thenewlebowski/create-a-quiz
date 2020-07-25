//=======REACT======
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


//=======Components=======
import BuildAQuizButton from './BuildAQuizButton/BuildAQuizButton'
import QuizForum from './QuizForum/QuizForum'


//Template for quiz [limit the amount of time we rewrite this code]
const questionTemplate = {
    question: '',
    answer: '',
    fakeAnswer1: '',
    fakeAnswer2: '',
    fakeAnswer3: '',
}

class BuildAQuiz extends Component {

    
    state = {
        quizForum: {
            name: '',
            questions: [
                    questionTemplate
                ],
        }
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

        const quiz = {
            name : this.state.quizForum.name,
            questions : this.state.quizForum.questions,
            user: this.props.auth.user
        }

        axios.post('api/quizes/add', quiz)
            .then( res => console.log(res.data))

        window.location = '/';

        // this.setState({
        //     quizForum: {
        //         name: '',
        //         questions:[
        //             {
        //                 question: '',
        //                 answer: '',
        //                 fakeAnswer1: '',
        //                 fakeAnswer2: '',
        //                 fakeAnswer3: '',
        //             }
        //          ],
        //     },
        //     isQuizForumVisible: false
        // })
    }

    handleQuizNameChange = (e) => {
        this.setState({quizForum:{
            ...this.state.quizForum,
            name: e.target.value
        }})
    }

    handleAddQuestion = () =>{
        let Questions = [
            ...this.state.quizForum.questions,
            questionTemplate

        ]
        this.setState({
            quizForum: {
                questions: Questions
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
        
        //Quiz Form
        const  quizForum = (
                <QuizForum
                    handleQuizNameChange={this.handleQuizNameChange}
                    submit = {this.handleSubmit}
                    handleChange={this.handleChange}
                    addQuestion = {this.handleAddQuestion}
                    questions={this.state.quizForum.questions}
                    remove={this.handleRemoveQuestion}
                />
            )

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

BuildAQuiz.propTypes = {
    auth: PropTypes.object.isRequired,
};


const mapStateToProps = state =>({
    auth: state.auth
})

export default 
connect(mapStateToProps)
(BuildAQuiz)
