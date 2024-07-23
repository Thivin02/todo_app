import React from 'react'
import { useState } from 'react'
import './Button.css'

const val =[{name : "HTML", background : { backgroundColor: "#fda821"}},{name : "CSS", background : {backgroundColor: "#15d4c8"}}, {name : "JAVASCRIPT", background : {backgroundColor: "#ffd12c"}}]
const defaults = {default_colour : "#f9f9f9" };


// function handleChange(e,ind){
//     console.log(val[ind].name)
//     // console.log()
// }


export const Button = ({handleTagChange,values}) => {
  // const {handleChange}  = props.handleChange 
  //  console.log(values)
    // const values = ["HTML","CSS"]
   
  return (
    
          
        
            val.map((value,ind) => (
              
                <button type='button' key={ind} name = "tag" className='button_fields' style={ values.includes(value.name) ? value.background : defaults}   onClick = {(e) => handleTagChange(e,ind)}>{value.name}</button>
              
                // console.log(values.includes(value))
              
            ))
        
  );
}
