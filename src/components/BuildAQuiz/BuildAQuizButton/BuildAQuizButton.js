import React from 'react'

const BuildAQuizButton = (props) => {
    let visible = null;
    if(props.visible){
        visible = <button onClick={props.clicked}>Start New Quiz</button>
    }
    return visible;
}

export default BuildAQuizButton
