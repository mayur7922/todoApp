import { useState, ChangeEvent } from 'react'
import './App.css'
import {ITask} from './Interfaces'
import TodoTask from './Components/TodoTask'

const App = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task"){
      setTask(event.target.value)
    }
  }

  const addTask = (): void => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    const newTask = { taskName: task, date: formattedDate, completed: false};
    setTodoList([...todoList, newTask]);
    setTask("");
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskNameToDelete;
    }))
  }

  const toggleTaskCompletion = (taskNameToToggle: string) => {
    setTodoList((todoList) =>
      todoList.map((task) =>
        task.taskName === taskNameToToggle
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };
  
  return <div className='App'>
    <h2>ToDo App</h2>
    <div className='header'>
      <input type="text" placeholder='Enter the task....' name='task' value={task} onChange={handleChange} />
      <button onClick={addTask}>Add</button>
    </div>
    <div className='todoList'>
      {todoList.map((task: ITask, key: number) => {
        return <TodoTask key={key} task={task} completeTask={completeTask} toggleTaskCompletion={toggleTaskCompletion} />
      })}
    </div>
    </div>
}

export default App
