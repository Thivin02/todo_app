import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Heading } from './components/Heading'
import { Contents } from './components/Contents'
function App() {
  const oldTask = localStorage.getItem("tasks")
  const [tasks, settasks] = useState(JSON.parse(oldTask));
  
  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  } ,[tasks])
  console.log(tasks)

  
  return (
    
    <div className='app'>
      <Heading  settasks = {settasks}/>
      <Contents settasks = {settasks} tasks = {tasks} />
       
    </div>
  )
}

export default App
