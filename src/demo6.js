import {createStore , combineReduces} from 'redux'

const defaltParam = {
	topic : 'about rent',
		descripting : 'please pay main befour end the date'
		amount : 500
	    dateAt : undefind
}

const expep = ({defaltParam} = {}) => {
	type : "INCREMENT",
	expences : {
		topic : 'about rent',
		descripting : 'please pay main befour end the date'
		amount : 500
	    dateAt : undefind
  }

}


const storeReduces = (state =[],action) =>{
	switch (action.type){
		case 'INCREMENT' :
		return {
			 ...state ,
			 action.expences
		}
		default 
		return state
	}
}

store.createStore(combineReduces({
	mainExpences : storeReduces
}))
store.dispatch(expep ())

const expences  = {
	mainExpences : [{
		topic : 'about rent',
		descripting : 'please pay main befour end the date'
		amount : 500
	    dateAt : undefind
	}],
	filleterExpencess : {
		sortAt : 'text',4
		startDate:undefind
		cool : 'time'
		amoutn : 'suri'
	}
}