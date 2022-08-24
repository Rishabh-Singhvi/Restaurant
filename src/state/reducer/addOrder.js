const reducer=(state=[],action)=>{
    if(action.type!=""){
        console.log(action.payload)
        return state.concat(action.payload)
    }
    else
        return state
}
export default reducer