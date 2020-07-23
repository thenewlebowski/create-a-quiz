import React from 'react'
import {Link} from 'react-router-dom';

//========STYLING========
import classes from './HomeHeaderCard.module.css'

export default function HomeHeaderCard(props) {
    return (
        <div className={classes.Card}>
            <div className={classes.CardInterior}>
                <Link to={props.link} className={classes.Button}>{props.name}</Link>
                {/* {props.name2 ? <hr className={classes.HR}/> : null} */}
                {props.name2 ? <Link to={props.link2} className={classes.Button}>{props.name2}</Link> : null}
            </div>
        </div>
    )
}
