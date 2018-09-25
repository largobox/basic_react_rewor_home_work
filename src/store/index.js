import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomid'
// import api from '../middlewares/api'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk, randomId, logger))
window.store = store // ATTANTION!!!

export default store