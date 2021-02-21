const Todo = require("./models");

exports.create = async (req, res, next) => {
  const { text, deadLine } = req.body;
  try {
    const newTodo = new Todo({
      text,
      deadLine,
    });
    await newTodo.save();
    return res.json(newTodo);
  } catch (error) {
    console.log(error);
  }
};
