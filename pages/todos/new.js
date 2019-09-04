import { useState } from "react";
import { useRouter } from 'next/router'

function NewTodo() {
  const router = useRouter()
  const [todoDescription, setTodoDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch('/api/todos/new', {
      method: "POST",
      body: JSON.stringify({ todoDescription })
    })

    router.push('/todos/list')
  }

  return <form onSubmit={handleSubmit}>
    <textarea name="todo-description" value={todoDescription} onChange={e => setTodoDescription(e.target.value)}></textarea>
    <input type="submit" />
  </form>
}

export default NewTodo