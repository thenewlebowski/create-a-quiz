import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//=====COMPONENTS=====
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import classes from './Quizes.module.css';

const Quizes = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect( () => {

        const fetchData =  async () => {
                await axios.get('api/quizes')
                .then( res => setData(res.data))
                .then( () => setLoading(false))
                .catch( err => console.log(err))
        }
        fetchData()
    }, [])
    return (
        <Auxiliary>
        {loading === true ? null :
            <div className={classes.Container}>
                <h6>Recent quizes:</h6>
                <div className={classes.CardContainer}>
                    {data.map( (quiz, index) => (
                        <div key={quiz._id} className={classes.Card}>
                            <Link to={'/quizzes/' + quiz._id} >{quiz.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        }
    </Auxiliary>
    )
}

export default Quizes