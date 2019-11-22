import {combineReducers} from 'redux'
import{ tasksReducer} from './tasksReducer'

const rootReduser =  combineReducers({
    tasksReducer
})
export default rootReduser;