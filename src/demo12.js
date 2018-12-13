import {  createStore ,combineReducers} from 'redux';
import uuid from 'uuid';
// ACTION OF ADD STUDNET 
const Add_number  =  ({
    name = "",
    role = 'software'
} = {}) => ({
    type : "ADD_STUDENT",
   stundent:{
    id : uuid(),
    name,
    role,}
})
//== EDIT_STUDENT ACTION-=====
const edit_student = (id,update_student) => ({
    type : "EDIT_STUDNET",
    id,
    update_student

})
// REDUCER ABOUT ADD_STUDENT 
const defaltaddstunt = []
const addReducers = (state=defaltaddstunt,action) => {
         switch (action.type){
             case "ADD_STUDENT":
             return [
                 ...state,
                 action.stundent
             ]
             case 'EDIT_STUDNET':
             return state.map((stundent)=>{
                 if(stundent.id === action.id){
                     return {
                         ...stundent,
                         ...action.update_student,
                     }
                 }
                 else {
                    // console.log('studnet not uppdated',action.update_student)
                 }
             })
             default :
            return state
         }
}
//==========================================================
const store = createStore(combineReducers({
    demoexpen : addReducers
}))
//===========================================================
store.subscribe(()=>{
    console.log(store.getState())
})
//===================DISPATCH=======================================
  const student_one =   store.dispatch(Add_number({name : 'suribabu',role : "ux developer"}))
  const student_Two= store.dispatch(Add_number({name : 'ghghgh',role : "uxbbj developer"}))
  
  store.dispatch(edit_student(student_Two.stundent.id,{name : 'GANGAVATH SURIBABU',role :'REACT DEVELOOPER'}))
//====================================================
const demoState  = {
    demoexpen : [{
        id : '1234',
        name: 'kdksd',
        role : 'ui devloper'
    }]
}