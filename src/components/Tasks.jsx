

const Tasks = ({id, text, deleteTask, completeTask, completed}) => {
    return <div className={ completed ? "card completed" : "card uncompleted" } key={id} >
            <h4>{id}</h4>
            <h2>{text}</h2>
            <div className="buttonClass">
                <button onClick={() => deleteTask(id)}>Delete</button>
                <button onClick={() => completeTask(id)}> {completed ? "Terminada" : "Sin terminar" } </button>
            </div>
        </div>
    
}

export default Tasks;