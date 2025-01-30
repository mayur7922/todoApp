import { ITask } from '../Interfaces'

interface Props {
    task: ITask;
    completeTask(taskidToDelete: number): void;
    toggleTaskCompletion(taskidToToggle: number): void;
}

const TodoTask = ({task, completeTask, toggleTaskCompletion}: Props) => {
    return (
        <div className={`task ${task.completed ? "completed" : ""}`}>
            <div className='task'>
                <div className='content'>
                    <input type="checkbox" checked={task.completed} onChange={() => {
                        toggleTaskCompletion(task.id)
                    } }/>
                    <span>{task.taskName}</span>
                    <span>{task.date}</span>
                </div>
                <button onClick={() => {
                    completeTask(task.id)
                }}>X</button>
            </div>
        </div>
    )
}

export default TodoTask