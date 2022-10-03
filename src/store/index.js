import {createStore, combineReducers} from 'redux'
import {workersReducer} from './WorkersReducers'
import {contractReducer} from './ContractsReducer'

const rootReducers = combineReducers({
	workers: workersReducer,
	contracts:contractReducer
})

export const store = createStore(rootReducers)
