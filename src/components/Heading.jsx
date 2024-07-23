import React from 'react'
import './Heading.css'
import { Button } from './Button'
import { useState } from 'react'

const val =[{name : "HTML", background : { backgroundColor: "#fda821"}},{name : "CSS", background : {backgroundColor: "#15d4c8"}}, {name : "JAVASCRIPT", background : {backgroundColor: "#ffd12c"}}]





export const Heading = ({settasks}) => {
  const [headVal, setheadVal] = useState({
    task : "",
    status : "todo",
    tag : []
  })


  function handleTagChange(e,ind){
   // console.log(val[ind].name)
    
   if(headVal.tag.some((item) => item  === val[ind].name )){  //Logic to handle clicking tag 
      const temp =  headVal.tag.filter((item) => item !== val[ind].name)
      setheadVal( (prev) => {
        return{
          ...prev, tag : temp 
        }
      })
   }
   else{
    setheadVal ( (prev) => {
      return{
        ...prev, tag: [...prev.tag,val[ind].name]
      }
    })
   }

    // setheadVal( prev => {
    //   return{
    //     ...prev, ["tag"] :  val[ind].name
    //   }
    // })

  // console.log(headVal.tag)
  }

  function handleChange(e,ind){
    // console.log(e.target.value + ":" + e.target.name )
    
    setheadVal( prev => {
      return{
        ...prev, [e.target.name] : e.target.value
      }
    })
    
    
  }

  function handleSubmit(e){
    e.preventDefault();
    settasks( (prev) => {
      return  [...prev , headVal]
      
    })
    console.log(headVal)
    // setheadVal( {   // To reset the form component after creating a task
    //   task : "",
    //   status : "todo",
    //   tag : []
    // })
    
  }

  
  // console.log(headVal)
  return (
    <header className='top-Section'>
      <form >
      <input value={headVal.task} className='top-textfield' type='text' name="task" placeholder='Enter your Task' onChange={(e) => handleChange(e)}></input>
      <div className='top-fields'>
          <Button  handleTagChange = {handleTagChange} values = {headVal.tag}/>
         
        <select value={headVal.status} className='selection-fields' name = "status" onChange={(e) => handleChange(e)}>
          <option>todo</option>
          <option>doing</option>
          <option>done</option>
        </select>
        <button type='button' onClick={(e) => handleSubmit(e)}  className='selection-button-fields'>Add Task</button>
        
      </div>
      </form>
    </header>
  )
}
