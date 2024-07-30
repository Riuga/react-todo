import { useState } from 'react'

export function EditTodoForm({ oldTask, editTask }) {
  const [task, setTask] = useState({
    header: oldTask.header,
    description: oldTask.description,
    date: oldTask.date,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setTask((prevTask) => ({ ...prevTask, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    editTask(task, oldTask.id)
  }
  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <input
        className='text-input'
        type='text'
        placeholder='I need to accomplish...'
        name='header'
        value={task.header}
        onChange={handleChange}
        required
      />
      <input
        className='text-input'
        type='text'
        placeholder='Description... (optional)'
        name='description'
        value={task.description}
        onChange={handleChange}
      />
      <input
        className='date-input'
        type='date'
        name='date'
        value={task.date}
        onChange={handleChange}
        required
      />
      <button type='submit'>Edit Task</button>
    </form>
  )
}
