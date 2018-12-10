import { createStore ,combineReducers} from 'redux';
import uuid from "uuid";


 const createReducer_for_addExpere = ({
 	id = '',
 	name = '',
 	amout ='' ,
 	describtion = '',
 	note = '',
 }={}) => ({

//here a   ({} = {}) => ({}) // most  ==>()=()
 	type : "ADD_EXPENCESS",
 	expences_naik : {
 		id :uuid(),
 		name,
 		amout,
 		describtion,
 		note
 	}
 })
// const defaultReducerParm = (sate) =>{
// 	type :"FiLLTER_REDUCER"

// };
const defaultReducerParm =[]

const ADD_EXPENCESS_ = (state = defaultReducerParm ,action) => {
	switch (action.type){
		case  "ADD_EXPENCESS":
	return [
		...state,
		action.expences_naik
      ];
    default : 
		return state
	}

}
///fiwr

// const filterReducers = ()

//  const filterReducer = (store = {}, action) => {
//  	type :'FiLLTER_REDUCER':
//  	default : 
//  	return state
//  }

const store = createStore( combineReducers({
	exprences : ADD_EXPENCESS_
	//filter : filterReducer
}))







store.dispatch(createReducer_for_addExpere({
	name : 'suribabu gangavth',
	amout : 2540,
note : 'sjfbwjfbjwbfebfjwfbjbjfbwjfbwj'}));


const demoState = {
	exprences : [{
		id : 'sothing new id',
		name : 'rent',
		amout : 1000,
		describtion : "plz pay rent",
		note : 'ok',
	}],
	filter : {
		sortBy : 'suri',
		endDate : 'cool'
	}
}
console.log(store.getState());
// store.subscribe(()=> {
// 	console.log(store.getState());
// })
//store.dispatch(createReducer_for_addExpere({ name: 'Coffee', amout: 300 }));
// store.dispatch(createReducer_for_addExpere({
// 	name : 'suribabu gangavth',
// 	amout : 2540}))