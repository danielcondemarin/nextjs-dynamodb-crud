const TableName = "Todos";

const getDynamoDBClient = () => {
  const AWS = require("aws-sdk");

  const options = {
    convertEmptyValues: true,
    region: "us-west-2"
  };

  const client = process.env.LOCAL_DYNAMO_DB_ENDPOINT
    ? new AWS.DynamoDB.DocumentClient({
        ...options,
        endpoint: process.env.LOCAL_DYNAMO_DB_ENDPOINT
      })
    : new AWS.DynamoDB.DocumentClient(options);

  return client;
};

module.exports = {
  readTodos: async () => {
    const { Items } = await getDynamoDBClient()
      .scan({
        TableName
      })
      .promise();

    return Items;
  },
  getTodo: async todoId => {
    const { Items } = await getDynamoDBClient()
      .scan({
        TableName
      })
      .promise();

    const todo = Items.find(todo => todo.todoId == todoId);

    return todo;
  },
  createTodo: async todoDescription => {
    await getDynamoDBClient()
      .put({
        TableName,
        Item: {
          todoId: Date.now(),
          todoDescription
        }
      })
      .promise();
  }
};
