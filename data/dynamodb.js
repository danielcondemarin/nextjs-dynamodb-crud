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

const TableName = "Todos"

module.exports = {
  readTodos: async () => {
    const { Items } = await client.scan({
      TableName
    }).promise()

    return Items;
  },
  getTodo: async (todoId) => {
    const { Items } = await client.scan({
      TableName
    }).promise()

    const todo = Items.find(todo => todo.todoId == todoId);

    return todo
  },
  createTodo: async (todoDescription) => {
    await client.put({
      TableName,
      Item: {
        todoId: Date.now(),
        todoDescription
      }
    }).promise()
  }
}