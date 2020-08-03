//=======REACT======
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


//=======Components=======
import BuildAQuizButton from './BuildAQuizButton/BuildAQuizButton';
import QuizForum from './QuizForum/QuizForum';


//Template for quiz [limit the amount of time we rewrite this code]
const questionTemplate = {
    question: '',
    answers: [
        {
          answer: '',
          correctAnswer: true  
        },
        {
          answer: '',
          correctAnswer: false  
        },
        {
          answer: '',
          correctAnswer: false  
        },
        {
          answer: '',
          correctAnswer: false  
        },
    ]
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

    //radio button change listener
    handleRadioBtnChange = (e, key, questionKey) => {
        //change previous answer to false
        let questionsArr = [
            ...this.state.quizForum.questions
        ]

        //copy answers array from the current questins array
        let answers = [
            ...questionsArr[questionKey].answers
        ]

        //create new answer with value according to key/index 
        let currAnswer = {
            ...answers[key],
            correctAnswer: true
        }
        
        //set previous correct answer to false
        answers.forEach((answer, i) => {
            //check to see what previous answer was selected true
            if(answers[i].correctAnswer === true){
                //set answer to false
                answers[i].correctAnswer = false;
            }
        })

        //save answer to answers array
        answers[key] = currAnswer;

        //save the updated questions array to the current question 
        questionsArr[questionKey] ={
            ...this.state.quizForum.questions[questionKey],
            answers : answers
        }

        //set state
        this.setState({
            quizForum: {
                ...this.state.quizForum,
                questions: questionsArr
            }
        })

        
    }   

    handleAnswerChange = (e, key, questionKey) => {
        let questionsArr = [
            ...this.state.quizForum.questions
        ]
        
        let answers = [
            ...questionsArr[questionKey].answers,
        ]

        let currAnswer = {
            ...answers[key],
            answer: e.target.value
        }

        
        answers[key] = currAnswer;

        questionsArr[questionKey] = {
            ...this.state.quizForum.questions[questionKey],
            answers: answers
        }

        this.setState({
            quizForum: {
                ...this.state.quizForum,
                questions: questionsArr
            }
        })
    }


    handleQuestionNameChange = (e, key) => {
        //Make shallow copy of the questions array
        let currArr = [
            ...this.state.quizForum.questions,        
        ]

        //Copy to a different variable the specific quiz that you would like to edit
        let currQuiz = {
            ...currArr[key],
            question : e.target.value
        }
        
        //Save the edited quizQuestion to your copy of the array
        currArr[key] = currQuiz;

        this.setState({
            quizForum: {
                ...this.state.quizForum,
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


        //Development
        console.log(quiz)

        //Production
        // axios.post('api/quizes/add', quiz)
        //     .then( res => console.log(res.data))

        

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
                    handleRadioBtnChange={this.handleRadioBtnChange}
                    handleQuizNameChange={this.handleQuizNameChange}
                    submit = {this.handleSubmit}
                    handleQuestionNameChange={this.handleQuestionNameChange}
                    handleAnswerChange={this.handleAnswerChange}
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
