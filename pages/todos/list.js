import { Fragment } from "react"
import Link from "next/link"
import data from '../../data'

function ListTodos({ todos }) {
  return <Fragment>
    <ul>
      {todos.map(todo => {
        const todoDetailsUrl = `/todos/details/${todo.todoId}`;

        return <li key={todo.todoId}>
          <Link href={todoDetailsUrl}>
            <a>{todo.todoDescription}</a>
          </Link>
        </li>
      })}
    </ul>
    <div>
      <Link href={'/todos/new'}>
        New Todo
      </Link>
    </div>
  </Fragment>
}

ListTodos.getInitialProps = async ({ req }) => {
  if (req) {
    // this is server side
    // is fine to use aws-sdk here
    return {
      todos: await data.readTodos()
    };
  } else {
    // we are client side
    // fetch via api
    const response = await fetch('/api/todos')
    return { todos: await response.json() }
  }
}

export default ListTodos