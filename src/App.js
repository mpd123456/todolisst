import logo from './logo.svg';
import React from 'react';
import Create from './components/Create';
import Task from './components/Task';

import './App.css';



function App() {
    
    const [tasks, setTasks] = React.useState([
    {
        title: "Thi học kỳ",
        completed: false
    },
    {
        title: "Làm thêm",
        completed: false
    },
    {
        title: "Ra ngoài chơi với bạn",
        completed: false
    }
]);
  const addTask = title => {
  const newTasks = [...tasks, { title, completed: false }];
  setTasks(newTasks);
    };
    const complete=(index)=>{
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    }
    const remove=(index)=>{
        const newTasks=[...tasks]
        newTasks.splice(index,1)
        setTasks(newTasks)
    }
    const [sttTask, setSttTask]=React.useState(0)
    const changeSttTask=task=>!task.completed
    React.useEffect(()=>{
        setSttTask(tasks.filter(changeSttTask).length)
    })
    return (
    <div className="todo-container">
        <div className="header">TODOLIST ({sttTask}) </div>
        <div className="tasks">
            {tasks.map((task, index) => (
                <Task task={task}
                    index={index}
                      key={index}
                      complete={complete}
                      remove={remove}
                />
            ))}
        </div>
        
        <div className="create-task" >
                    <Create addTask={addTask}/>
                </div>
    </div>
  );
}

export default App;
