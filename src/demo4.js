
import { createStore } from 'redux'

const incrementCout = ({ incrementBy = 2} = {}) => ({
      type : "INCREMENT",
      incrementBy
});
const decrementCout = ({ decrementBy = 1} = {}) =>({
  type : 'DECREMENT',
  decrementBy 
})
const resetCount = ({resetby = 0}={}) => ({
  type :"RESET",
  resetby 
})
const setCount = () => ({
   type :'SET'
})

const reducers_value = (state={ count : 0},action) => {
  switch (action.type) {
    case "INCREMENT":
    return {
      count : state.count + action.incrementBy
    }
    case 'DECREMENT':
    return {
      count :state.count  - action.decrementBy
    }
    case 'RESET':
    return {
      count :action.resetby
    }
    case 'SET' : 
    return {
      count : 'sui'
    }
    default :
      return 
        state
 }
}
const store =createStore(reducers_value)

store.subscribe(() => {
  console.log(store.getState())

})

store.dispatch(incrementCout({incrementBy : 10} ))
store.dispatch(incrementCout({incrementBy : 10} ))
store.dispatch(decrementCout({decrementBy:50}))
store.dispatch(resetCount({resetby:1000}))
store.dispatch(setCount())


