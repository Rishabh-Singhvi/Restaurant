import React, { useState } from 'react'
import ItemList from './ItemList';
import marg from './images/pizza.jpeg'
import freshveg from './images/pizza2.webp'
import choco from './images/choco.jpeg'
import noodle1 from './images/Noodle1.jpeg'
import noodles2 from './images/Noodle2.jpeg'
import brownie from './images/brownie.webp'

function Order() {
  const[category,setCategory]=useState([
    {
        'type':'Pizza',
        'list':[
            {
                'id':1,
                'name':'Margherita',
                'price':400,
                'rating':4.1,
                'status':'pending',
                'des':'Very good pizza',
                'photo':marg
            },
            {
                'id':10,
                'name':'Fresh Veggie',
                'price':450,
                'rating':4.5,
                'status':'pending',
                'des':'Very good pizza',
                'photo':freshveg
            }
        ]
    },
    {
        'type':'Noodles',
        'list':[
            {
                'id':2,
                'name':'Shezwan',
                'price':300,
                'rating':4.1,
                'des':'Very good shezwan noodles',
                'status':'pending',
                'photo':noodles2
            },
            {
                'id':3,
                'name':'Hakka',
                'price':270,
                'rating':4.2,
                'des':'Very good hakka noodles',
                'status':'pending',
                'photo':noodle1
            }
        ]
    },
    {
        'type':'Desserts',
        'list':[
            {
                'id':4,
                'name':'Choco Lava',
                'price':170,
                'rating':4.7,
                'des':'Very good choco lava',
                'status':'pending',
                'photo':choco
            },
            {
                'id':5,
                'name':'Brownie',
                'price':150,
                'rating':4.4,
                'des':'Very good brownie',
                'status':'pending',
                'photo':brownie
            }
        ]
    }
  ]);

  return (
    <ItemList items={category}/>
  )
}

export default Order