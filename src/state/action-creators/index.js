export const addOrder = (order)=>{
    return(dispatch)=>{
        dispatch({
            type: order.name,
            payload: order
        })   
    }
}
export const delOrder = (order)=>{
    return(dispatch)=>{
        dispatch({
            type: order.name,
            payload: order.id
        })   
    }
}

export const totalCost=(t)=>{
    return(dispatch)=>{
        dispatch({
            type: 'add',
            payload:t
        })
    }
}