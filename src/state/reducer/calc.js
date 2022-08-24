const reducer=(state=0,action)=>{
    if(action.type==='add'){
        //console.log(action.payload)
        return state+action.payload
    }
    else if(action.type==='sub')
        return state+action.payload
    else
        return state
}
export default reducer