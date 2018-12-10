import { createStore} from 'redux';

const store = createStore((state = {suri: 1},action) => {
	switch (action.type){
		case 'INCREMENT':
		return {
			suri : state.suri + 10
		}
		case 'DECREMENT':
		return {
			suri : state.suri  - 10
		}
		case 'RESET':
		return {
			suri : 0
		}
		case 'SET':
		return {
			suri : 50
		}
		default : 
		  state
	}
})
//============ GETSTORE ===========//
//====================================
//
store.subscribe(() => {
	console.log(store.getState())
})

// ============ DISPATCH ===========//
//====================================
store.dispatch({
	type : 'INCREMENT'
})
store.dispatch({
	type : 'DECREMENT'
})
store.dispatch({
	type : 'RESET'
})
store.dispatch({
	type : 'SET'
})


