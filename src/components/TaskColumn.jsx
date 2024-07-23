import React from 'react'
import { TaskCard } from './TaskCard'
import './TaskColumn.css'
import './TaskCard.css'


export const TaskColumn = ({title,icon,status,tasks,handleDelete}) => {
  return (
    <section className='task-column' >
        
        <h2 className='task-heading'> <img className='column-image' src={icon} alt=''/>    {title}</h2>
            
            
        {/* <TaskCard tasks={tasks} status={status} /> */}
       
        {
            tasks.map((val,ind) => val.status === status && 
            
            <TaskCard key={ind} title = {val.task} tag = {val.tag} handleDelete = {handleDelete} ind = {ind}/>
            )
        }
        
        
    </section>
  )
}
