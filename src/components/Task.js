
const Task=({ task, index, complete, remove })=>{
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.title}
            <button style={{background:"red"}} onClick={()=>remove(index)}>X</button>
            <button onClick={()=>complete(index)}>Complete</button> 
        </div>
    );
  }
  export default Task