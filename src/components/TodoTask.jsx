import { DeleteIcon } from '../assets/DeleteIcon'
import { EditIcon } from '../assets/EditIcon'

export function TodoTask({ task, toggleComplete, deleteTask, startEditing }) {
  return (
    <div className='task'>
      <div
        className={`${task.isCompleted ? 'complete' : ''} task-info`}
        onClick={() => toggleComplete(task.id)}
      >
        <b>{task.header}</b>
        <p>{task.description}</p>
        <p>{task.date}</p>
      </div>
      <div className='task-btns'>
        <button onClick={() => startEditing(task.id)}>
          <EditIcon />
        </button>
        <button onClick={() => deleteTask(task.id)}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  )
}
