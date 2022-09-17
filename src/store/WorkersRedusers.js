import workers from '../Components/Workers/Workers'

const defaultState = {
	workers:[
	{id:1, name: 'Адльберт'},
	{id:2, name: 'Оббиратель бабушек'},
	{id:3, name: 'Начальникамана'},
	{id:4, name: 'Новый'},
]}

export const workersReduser = (state = defaultState, action) => {
	switch (action.type) {
		case 'ADD_WORKER':
			return {...state, workers:[...state.workers, action.payload]}
		default:
			return state
	}
}
