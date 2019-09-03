function EditTodo({ todoDescription, todoId }) {
  return <form>
    <label>Edit Todo: {todoId}</label>
    <br />
    <textarea name="todo-description">{todoDescription}</textarea>
    <input type="submit" />
  </form>
}

EditTodo.getInitialProps = ({ req, query }) => {
  if (req) {
    // we are server side
  } else {
    // we are client side
  }

  // for now just return something
  return {
    todoId: query.id,
    todoDescription: "Cleaning the house involves using vacuum cleaning and mopping the floor. Tyding up, cleaning the mirrors etc."
  };
}

export default EditTodo