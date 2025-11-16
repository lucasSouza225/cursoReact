import { ChevronRightIcon, Trash2 } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {

    return (
        <ul className="space-y-4 p-6 bg-slate-300 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">

                    {/* Botão marcar como completa */}
                    <button
                        className={`bg-slate-500 w-full text-left p-2 rounded-md
                        ${task.isCompleted ? "line-through text-green-200" : "text-white"}`}
                        onClick={() => onTaskClick(task.id)}
                    >
                        {task.title}
                    </button>


                    {/* Botão abrir detalhes */}
                    <button
                        className="bg-slate-500 text-white p-2 rounded-md"
                    >
                        <ChevronRightIcon />
                    </button>

                    {/* Botão deletar */}
                    <button
                        className="bg-slate-500 text-red-400 p-2 rounded-md"
                        onClick={() => onDeleteTaskClick(task.id)}
                    >
                        <Trash2 />
                    </button>

                </li>
            ))}
        </ul>
    );
}

export default Tasks;
