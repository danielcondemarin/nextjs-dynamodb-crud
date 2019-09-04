import data from '../../../data'
import Link from "next/link"

function TodoDetails(props) {
  let { todo } = props;
  todo = {
    todoId: 1,
    todoDescription: "Hey"
  };
  return <div>
    <div>
      <p>Id: {todo.todoId}</p>
      <p>Description: {todo.todoDescription}</p>
    </div>
    <Link href="/todos/list">
      <a>Back to Todos List</a>
    </Link>
  </div>
}

// TodoDetails.getInitialProps = async ({ req, query }) => {
//   if (req) {
//     // this is server side
//     // is fine to use aws-sdk here
//     const todo = await data.getTodo(query.id)
//     console.log("TCL: TodoDetails.getInitialProps -> todo", todo)
//     return {
//       todo
//     };
//   } else {
//     // we are client side
//     // fetch via api
//     try {
//       console.log('HERE!!!')
//       const response = await fetch(`/api/todos/${query.id}`)
//       const todo = await response.json()
//       console.log("TCL: TodoDetails.getInitialProps -> todo", todo)
//     } catch (err) {
//       console.log(err)
//     }

//     return { todo }
//   }
// }

export default TodoDetails