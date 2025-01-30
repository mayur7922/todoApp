import { ITask } from '../Interfaces'

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
    toggleTaskCompletion(taskNameToToggle: string): void;
}

const TodoTask = ({task, completeTask, toggleTaskCompletion}: Props) => {
    return (
        <div className={`task ${task.completed ? "completed" : ""}`}>
            <div className='task'>
                <div className='content'>
                    <input type="checkbox" checked={task.completed} onChange={() => {
                        toggleTaskCompletion(task.taskName)
                    } }/>
                    <span>{task.taskName}</span>
                    <span>{task.date}</span>
                </div>
                <button onClick={() => {
                    completeTask(task.taskName)
                }}>X</button>
            </div>
        </div>
    )
}

export default TodoTask