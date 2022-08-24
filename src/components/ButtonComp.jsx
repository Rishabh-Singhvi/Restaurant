import React from "react";
import { useState } from "react";
//import firebase from "../Firebase.js";
export default function Car(props) {
    const [ans,setAns]=useState("");
    //let db=firebase.firestore();
    const add = ()=>{
     setAns(parseInt(props.val1)+parseInt(props.val2))
     //db.collection("helo").add("12")
    }
    const sub = ()=>{
      setAns(parseInt(props.val1)-parseInt(props.val2))
    }
    return(
      <div>
        <h6>{ans}</h6>
        <button onClick={add}>Add</button>
        <button onClick={sub}>Subtract</button>
      </div>
    )
  }