import { combineReducers } from 'redux';
import authReducers from './authReducers';
import errorReducers from './errorReducers';
import flashMessageReducer from './flashMessageReducer';

export default combineReducers({
    flashMessage: flashMessageReducer,
    auth: authReducers,
    errors: errorReducers
})