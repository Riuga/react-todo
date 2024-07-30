import { useEffect, useState } from 'react'
import { EditTodoForm } from './EditTodoForm'
import './Todo.scss'
import { TodoForm } from './TodoForm'
import { TodoTask } from './TodoTask'

export function Todo() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || []
    setTasks(savedTasks)
  }, [])

  const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2)
  }
  const addTask = (task) => {
    const newTasks = [
      ...tasks,
      { ...task, id: uid(), isCompleted: false, isEditing: false },
    ]
    localStorage.setItem('tasks', JSON.stringify(newTasks))
    setTasks(newTasks)
  }

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
    setTasks(newTasks)
  }

  const startEditing = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    )
  }

  const editTask = (newTask, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, ...newTask, isEditing: !task.isEditing }
        : task
    )

    localStorage.setItem('tasks', JSON.stringify(newTasks))
    setTasks(newTasks)
  }

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    )
  }

  return (
    <div className='todo-wrapper'>
      <h1>REACT TODO APP</h1>
      <TodoForm addTask={addTask} />
      <div className='tasks'>
        {tasks.map((task) =>
          task.isEditing ? (
            <EditTodoForm
              key={`edit-${task.id}`}
              editTask={editTask}
              oldTask={task}
            />
          ) : (
            <TodoTask
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
              startEditing={startEditing}
            />
          )
        )}
      </div>
    </div>
  )
}
