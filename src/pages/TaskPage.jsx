import { useSearchParams } from "react-router-dom";


function TaskPage() {
    const [searchParams] = useSearchParams()
    const title = searchParams.get("title")
    const description = searchParams.get("description")

    return (
        <div className="w-screen h-screen bg-blue-300 flex justify-center p-6" >
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-gray-950 font-bold text-center">Gerenciador de Tarefas</h1>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
    )
}

export default TaskPage;