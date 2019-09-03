import data from '../../data'

function ListTodos({ todos }) {
  return <ul>
    {todos.map(todo => <li>{todo}</li>)}
  </ul>
}

ListTodos.getInitialProps = async ({ req }) => {
  if (req) {
    // we are server side
  } else {
    // we are client side
  }

  // for now just return something
  return {
    todos: await data.readTodos()
  };
}

export default ListTodos