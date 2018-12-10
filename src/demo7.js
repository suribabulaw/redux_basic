import { createStore,combineReducers} from 'redux'
import uuid from 'uuid'

const AddExpence = ({
        id  = '',
		descripiton = 'nsc',
		rent = 0,
		note = '',
		cool = ''
} ={}) =>({
     type :'ADD_EXPENCES',
   expencesss:{
       id  :uuid(),
		descripiton,
		rent ,
		note ,
		cool ,
}})
const expensesReducerDefaultState = [];
 const expencesReduces = (state = expensesReducerDefaultState,action) =>{
 	switch (action.type){
 		case 'ADD_EXPENCES':
 		return [
 		     ...state,
 			action.expencesss
 			];
 			
       default :
 		return state
 	}
 }

  const sortAtwihtReduces = (state =[],action) => {
 	switch (action.type){
 		default :
 		return state
 	}
 }

const store=createStore(combineReducers({
	expences : expencesReduces,
	sortAtwiht:sortAtwihtReduces
}))


store.subscribe(() => {
  console.log(store.getState());
});


store.dispatch(AddExpence({ descripiton :'remtggd',note : 'suri ure best'}));
const demoState = {
	expences : [{
		id : 'suri',
		descripiton : 'noting',
		rent : 2000,
		note : 'most be geve befour notice tinfndj',
		cool : 'suri'

	}],
	sortAtwiht : {
		sateDate :undefined,
		endDate : undefined,
		text : 'date',
		prices : '',

	}
}