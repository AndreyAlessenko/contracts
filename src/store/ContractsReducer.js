const defaultState = [
	{id:11, name: 'Договор 1'},
	{id:22, name: 'Договор 2'},
	{id:33, name: 'Договор 3'},
	{id:44, name: 'Договор 4'},
]

export const contractReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'ADD_CONTRACT':
			return [...state, action.payload]
		default:
			return state
	}
}
