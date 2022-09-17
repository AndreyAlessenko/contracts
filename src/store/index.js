import {createStore, combineReducers} from 'redux'
import {workersReduser} from './WorkersRedusers'
import {contractReduser} from './ContractsReduser'

const rootReducers = combineReducers({
	workers: workersReduser,
	contracts:contractReduser
})

export const store = createStore(rootReducers)
