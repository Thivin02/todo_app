import React from 'react'
import './TaskCard.css'
import { Button } from './Button'
import deleteIcon from "../assets/delete.png";

export const TaskCard = ({title,tag,handleDelete,ind}) => {
  return (
    <article className='task-card'>
      <p className='taskcard-text'>  {title}</p>
        <div className='taskcard-section'>
            <div>
            {
                tag.map((val,index) =>  <p key={index}>{val}</p>)
            }
            </div>
            <div className='taskcard-imgdiv' onClick={() => handleDelete(ind)}>
              <img src={deleteIcon} alt='' className='taskcard-img'/>
            </div>
        
        </div>
    
    </article>
  )
}
