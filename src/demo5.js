import {createStore, combineReducers} from 'redux'
import uuid from 'uuid'
console.log('suribbau')


const expencessDefaultValue = []

const ExpenceReducers = (state= expencessDefaultValue,action) => {
	switch(action.type){
		case 'INCEMRNT' :
		default : 
		    return state
	}
	
}
const fillerterDefaultValues = {
      	sortBy : '',
		sarterdData : "amout",
		closeAt : "",
		amount : 'suri'
}
const fillerterReduce = (state = fillerterDefaultValues , action) => {
	switch(action.type){
		case 'FILLTER' :
		default : 
		    return state
	}

}
//create store
const store = createStore(combineReducers({
	 Expencesssss:ExpenceReducers,
	 fillerter:fillerterReduce
}))
  
 console.log(store.getState());
 


const Expencess = {
	Expencesssss : [{
		name : 'suri_babu',
		note : 'room Rent',
		descreption : 'pay as soon passible',
		staretAt : '',
		msg : "thank you"
	}],
	fillerter : {
		sortBy : 'date',
		sarterdData : "amout",
		closeAt : "",
		amount : 'suri'
	}
}
