import { useState } from 'react'

export function TodoForm(props) {
  const [task, setTask] = useState({
    header: '',
    description: '',
    date: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setTask((prevTask) => ({ ...prevTask, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTask(task)
    setTask({
      header: '',
      description: '',
      date: '',
    })
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
        id='date'
        name='date'
        value={task.date}
        onChange={handleChange}
        required
      />
      <button type='submit'>Add Task</button>
    </form>
  )
}
