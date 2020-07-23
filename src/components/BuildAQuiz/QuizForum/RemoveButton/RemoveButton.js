import React from 'react'

import classes from './RemoveButton.module.css'

export default function RemoveButton(props) {
    return (
        <div onClick={() => props.remove(props.question)} className={classes.Remove}>
            <span>X</span>         
        </div>
    )
}
