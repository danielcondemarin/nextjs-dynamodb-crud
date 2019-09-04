var AWS = require("aws-sdk");

const options = {
  convertEmptyValues: true,
  region: "us-east-1"
};

const client = process.env.LOCAL_DYNAMO_DB_ENDPOINT
  ? new AWS.DynamoDB.DocumentClient({
    ...options,
    endpoint: process.env.LOCAL_DYNAMO_DB_ENDPOINT
  })
  : new AWS.DynamoDB.DocumentClient(options);

module.exports = {
  readTodos: async () => {
    const { Items } = await client.scan({
      TableName: "Todos"
    }).promise()

    console.log("TCL: todos", Items)

    return Items;
  },
  getTodo: async (todoId) => {
    const { Items } = await client.scan({
      TableName: "Todos"
    }).promise()

    console.log("TCL: Items", Items)
    const todo = Items.find(todo => todo.todoId == todoId);
    console.log("TCL: todo", todo)

    return todo
  },
  createTodo: async () => {
    // TODO:
  },
  editTodo: async () => {
    // TODO:
  }
}