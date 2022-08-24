//import logo from './logo.svg';
import ButtonComp from './components/ButtonComp';
import './App.css';
import { useState } from 'react';
import firebase from './firebase_init';
import Order from './components/Order';
import OrderList from './components/OrderList';
import NavBar from './components/NavBar';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  
  
  
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path="/browse" element={<Order />}/>
      <Route path='/cart' element={<OrderList/>}/>  
    </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;


// const db = firebase.firestore();

//   const [value1, setValue] = useState();
//   const [value2, setValue2] = useState();
//   const handle = (val)=>{
//     console.log(db)
//     setValue(val)
    // db.collection("cities").add({
    //   name: "Tokyo",
    //   country: "Japan"
  // })
  // }
  // const handle2 = (val)=>{
  //   console.log(val)
  //   setValue2(val)
  // }
  //setValue(this.value1)
  //let value1;


  // <h1>Calculator</h1>
  //     <input value={value1} onChange={(e)=>handle(e.target.value)}/>
  //     <br/>
  //     <input value={value2} onChange={(e)=>handle2(e.target.value)}/>
  //     <br/>
  //     <ButtonComp val1={value1} val2={value2}/>