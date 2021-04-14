import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import curTabReducer from './reducer/curTab'
import curTabState from './state/curTab'
const allReducers = combineReducers({
    curTab: curTabReducer
})

const store = createStore(allReducers, {
    curTab: curTabState
}, applyMiddleware(ReduxThunk))

export default store