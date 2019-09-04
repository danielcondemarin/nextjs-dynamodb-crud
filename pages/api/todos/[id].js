import data from '../../../data'

export default async (req, res) => {
  const todo = await data.getTodo(req.query.id)
  console.log("TCL: todo", todo)
  res.status(200).json(todo);
};