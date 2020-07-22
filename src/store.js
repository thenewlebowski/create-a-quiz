import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initalState = {};

const middleWare = [thunk];

const store = createStore(
    rootReducer,
    initalState,
    compose(
        applyMiddleware(...middleWare)
    )
)

export default store;