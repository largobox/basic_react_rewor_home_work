import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomid'

const store = createStore(reducer, applyMiddleware(logger, randomId))
window.store = store // ATTANTION!!!

export default store