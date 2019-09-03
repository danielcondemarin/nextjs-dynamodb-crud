class TodoDetails extends React.Component {
  render({ todo }) {
    return <p>{todo}</p>
  }
}

TodoDetails.getInitialProps = ({ req }) => {
  if (req) {
    // we are server side
  } else {
    // we are client side
  }

  // for now just return something
  return {
    todo: "Cleaning the house involves using vacuum cleaning and mopping the floor. Tyding up, cleaning the mirrors etc."
  };
}

export default TodoDetails