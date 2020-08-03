import React from 'react'

//=====Font Awesome====//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

//=====STYLING====//
import classes from './RemoveButton.module.css'

export default function RemoveButton(props) {
    return (
        <div onClick={() => props.remove(props.question)} className={classes.Remove}>
            <FontAwesomeIcon className={classes.Icon} icon={faTimes}/>      
        </div>
    )
}
