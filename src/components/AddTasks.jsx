function AddTasks() {
    return (
        <div className="space-y-4 p-6 bg-slate-300 rounded-md shadow flex flex-col">
            <input type="text" placeholder="Digite o titulo da tarfa" className="border-b-gray-800 bg-white outline-sky-500 px-4 py-2 rounded-md " />
            <input type="text" placeholder="Digite o descrição da tarfa" className="border-b-gray-800 bg-white outline-sky-500 px-4 py-2 rounded-md " />
            <button className="bg-sky-500 border-b-gray-800 outline-sky-50 px-4 py-2 text-white rounded-md hover:bg-sky-900 duration-400">Adicionar</button>
        </div>
    )
}

export default AddTasks