import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state/index';
import { bindActionCreators } from 'redux';
import star from './images/star.png'

function ItemList(props) {
    const dispatch=useDispatch()
    const [items, setItems]=useState([]);
    const [fType,setFType]=useState("Pizza");
    useEffect(()=>{
        console.log(props.items);
        setItems(props.items)
        console.log(items)
    },[items])
    const handleOnChange=(event)=>{
        setFType(event.target.value)
    }
    // const dis = (l,amt) => dispatch => {
    //     return Promise.all([dispatch(actionCreators.addOrder(l)), dispatch(actionCreators.totalCost(amt))])
    // }
  return (
    <>
        <select className="selectList" value={fType} id="selectList" onChange={handleOnChange}>
            {items.map((item,key)=>(<option value={item.type}>{item.type}</option>))}  
        </select>
        <br/><br/>
        {
            items.map((item,key)=>(
                <div>
                { 
                    item.type==fType &&
                        <div class="grid grid-cols-4 gap-4 mx-4" >
                        {item.list.map((l,i)=>(
                            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <img class="w-full mr-7 h-5 sm:h-40" src={l.photo} alt="foodImg"/>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">{l.name}</div>
                                <p class="text-gray-700 text-base">
                                    {l.des}
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rs. {l.price}</span>
                                <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{l.rating}</span>
                            </div>
                            <div class="px-6 pt-1 pb-2">
                            <button className="bg-blue-500 inline-block hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={()=>{dispatch(actionCreators.addOrder(l))}}>
                                Add to Cart
                            </button>
                            </div>
                            </div>
                        ))}
                        </div>
                }
                </div>
            )
        )}
    </>
  )
}

export default ItemList