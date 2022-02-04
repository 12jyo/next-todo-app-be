const todoModel = require("./todo.model");

module.exports = app => {
  // get all todos
  app.post("/", async (req, res) => {
    return res.json(await todoModel.find({email: req.body.email}));
  });

  //add a todo
  app.post("/add", async (req, res) => {
    const todo = new todoModel({
      ...req.body
    });
    await todo.save();
    return res.json({
      success: true,
      message: "todo saved!"
    });
  });

  // change note state
  app.get("/:id", async (req, res) => {
    const todo = await todoModel.findOne({
      id: req.params.id
    });

    todo.done = !todo.done;

    await todo.save();

    return res.json({
      success: true,
      message: "todo saved!"
    });
  })
};