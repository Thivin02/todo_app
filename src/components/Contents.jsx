import React from 'react'
import './Contents.css'
import { Section } from './Section'
import todoIcon from '../assets/direct-hit.png'
import doingIcon from '../assets/glowing-star.png'
import doneIcon from '../assets/check-mark-button.png'
import { TaskColumn } from './TaskColumn'



export const Contents = ({settasks,tasks,handleDelete,ind}) => {

  function handleDelete(ind){
    const filteredTask = tasks.filter((itr,index) => ind !== index)
    settasks(filteredTask);
}

  return (
    <div className='section-headings'>
        {/* <h1>To-do </h1>
        <section >
            <p>Hey this is a subsection</p>
        </section>
        <h1>Doing</h1>
        <h1>Done</h1> */}
        <TaskColumn title = 'To do' icon = {todoIcon} status = 'todo' tasks = {tasks} handleDelete = {handleDelete} ind = {ind}/>
        <TaskColumn title = 'Doing' icon = {doingIcon}  status = 'doing' tasks = {tasks} handleDelete = {handleDelete} ind = {ind}/>
        <TaskColumn title = 'Done' icon = {doneIcon} status = 'done' tasks = {tasks} handleDelete = {handleDelete} ind = {ind}/>
    </div>
  )
}
