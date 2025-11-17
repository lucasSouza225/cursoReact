import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";


function TaskPage() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const title = searchParams.get("title")
    const description = searchParams.get("description")

    return (
        <div className="w-screen h-screen bg-blue-300 flex justify-center p-6" >
            <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative mb-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute left-0 top-0 bottom-0 border-2  bg-blue-50 hover:bg-sky-400 hover:text-white duration-300 font-bold rounded-md" >
                        <ChevronLeftIcon />
                    </button>
                    <h1 className="text-3xl text-gray-950 font-bold text-center">Detalhes da Tarefas</h1>
                </div>
                <div className="space-y-4 p-6 bg-slate-300 rounded-md shadow">
                    <h2 className="text-xl font-bold  ">{title}</h2>
                    <p className="text-slate-600">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default TaskPage;