import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
                .then( res => setLoading(false))
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
                    {data.map( quiz => (
                        <div className={classes.Card}>
                            <a href={'/'} key={quiz.objectId}>{quiz.name}</a>
                        </div>
                    ))}
                </div>
            </div>
        }
    </Auxiliary>
    )
}

export default Quizes