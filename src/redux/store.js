//this creates the store
//redux flow
// Action-->Reducer-->Store-->DOM changes
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger' // logger is a middware that is rendered before reducer
import rootReducer from './root-reducer'

const middlewares=[logger] // this initialises the middleware

const store=createStore(rootReducer, applyMiddleware(...middlewares)) // this finally set the store taking in the "rootReducer" which contains all the reducers and middleware, logger
// this store will be passed in as a prop to <Provider> in index.js
export default store