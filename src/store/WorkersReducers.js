// import workers from '../Components/Workers/Workers'

const defaultState = {
	workers:[
	{id:0, name: 'Адльберт'},
	{id:1, name: 'Оббиратель бабушек'},
	{id:2, name: 'Начальникамана'},
	{id:3, name: 'Новый'},
]}

export const workersReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'ADD_WORKER':
			return {...state, workers:[...state.workers, action.payload]}
		case 'REMOVE_WORKER':
			return {...state, workers:state.workers.filter(item => item.id !== action.payload)}
		default:
			return state
	}
}
