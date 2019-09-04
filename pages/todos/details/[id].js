import data from '../../../data'
import Link from "next/link"

function TodoDetails({ todo: { todoId, todoDescription } }) {
  return <div>
    <div>
      <p>Details: {todoId}</p>
      <p>{todoDescription}</p>
    </div>
    <Link href="/todos/list">
      <a>Back to Todos List</a>
    </Link>
  </div>
}

TodoDetails.getInitialProps = async ({ req, query }) => {
  if (req) {
    // this is server side
    // is fine to use aws-sdk here
    const todo = await data.getTodo(query.id)
    console.log("TCL: TodoDetails.getInitialProps -> todo", todo)
    return {
      todo
    };
  } else {
    // we are client side
    // fetch via api
    try {
      const response = await fetch(`/api/todos/${query.id}`)
      const todo = await response.json()
      console.log("TCL: TodoDetails.getInitialProps -> todo", todo)
    } catch(err) {
      
    }

    return { todo }
  }
}

export default TodoDetails