import { useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Estudar programação para entra na area de programação.",
      isCompleted: false
    },
    {
      id: 2,
      title: "Praticar React",
      description: "Treinar componentes, estados e hooks para melhorar no front-end.",
      isCompleted: false
    },
    {
      id: 3,
      title: "Criar Portfólio",
      description: "Montar um portfólio online com projetos pessoais.",
      isCompleted: false
    },
    {
      id: 4,
      title: "Aprender Banco de Dados",
      description: "Estudar SQL e modelos de dados para fortalecer o conhecimento no back-end.",
      isCompleted: false
    }
  ]);

  function onTaskClick(taskId) {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      )
    );
  }

  function onDeleteTaskClick(taskId) {
    setTasks(prevTasks =>
      prevTasks.filter(task => task.id !== taskId)
    );
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    }

    setTasks([...tasks, newTask])

  } 

  return (
    <div className="w-screen h-screen bg-blue-300 flex justify-center p-6" >
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-gray-950 font-bold text-center">Gerenciador de Tarefas</h1>

        <AddTasks addTask={setTasks} onAddTaskSubmit={onAddTaskSubmit} />

        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  )
}

export default App;
