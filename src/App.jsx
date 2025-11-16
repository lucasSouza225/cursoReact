import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks'

function App() {

  return (
    < div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className='w-[500px]  '>
        <h1 className='text-3xl text-amber-300 front-bold text-center '>Gereciador de Tarefas</h1>
        <AddTasks />
        <Tasks />
      </div>
    </div>
  )
}

export default App
