import { createStore } from 'redux'


const store= createStore((state={count : 1},action) => {
    switch (action.type){
// ===============INCREMENT ==========================//
//====================================================//
        case 'INCREMENT':
        const IncremnetBy = typeof action.IncremnetBy == 'number' ? action.IncremnetBy : 0 ;
        return {
           count : state.count + IncremnetBy
        }
// ===============DECREMENT ==========================//
//====================================================//
        case 'DECREEMENT':
      const  DecreemnetBy = typeof action.DecreemnetBy == 'number' ? action.DecreemnetBy : 0 ;
        return {
        	count : state.count - DecreemnetBy

        }
 // ===============RESET ==========================//
//====================================================//
      case "RESET" : 
      return {
      	count : 0
      }

// ===============SET ==========================//
//====================================================// 
   case 'SET' :
   //const surinaik = console.log('please select enter int value only')
  const letsSet = typeof action.letsSet == 'number' ? action.letsSet : console.log('please select enter int value only');
   return {
   	   count : letsSet
   }    

    	default : 
    	   return 
    	      state
    }
})

store.subscribe (() => {
     console.log(store.getState())
	})


store.dispatch({
	type : 'INCREMENT',
	IncremnetBy : 20
})
store.dispatch({
	type : 'DECREEMENT',
	DecreemnetBy : 5
});
store.dispatch({
	type : 'RESET',
	SetBy : 0
});
store.dispatch({
	type : 'SET',
	letsSet : 1001
});


