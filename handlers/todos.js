const todos = require('../cloud/todos')


const getTodosHandler =  (req, reply) => {
    reply.send(todos);
};

const getTodoHandler = (req, reply) => {
  const { id } = req.params;

  const todo = todos.filter((todo) => {
    return todo.id === id;
  })[0];

  if(!todo) {
    return reply.status(404).send({
      errorMsg: 'Todo not found',
    });
  }

  return reply.send(todo)
}

const addTodoHandler = (req, reply) => {
  const {title, body } = req.body;

  const id = todos.length + 1;
  todos.push({ id, title, body})

  reply.send('Todo added');
}

const updateTodoHandler = ( req, reply) => {
  const {title, body} = req.body;
  const {id} = req.params;

  const todo = todos.filter((todo) => {
    return todo.id === id;
  })[0];

  if(!todo) {
    return reply.status(404).send(new Error("Todo doesn't exist"));
  }

  todo.title = title;
  todo.body = body;

  return reply.send('Todo updated');
};

const deleteTodoHandler = (req, reply) => {
  const {id} = req.params;


  const todoIndex = todos.findIndex((todo) => {
    return todo.id === id;
  });

  if(todoIndex === -1) {
    return reply.status(404).send(new Error("Todo doesn't exist"));
  }


  todos.splice(todoIndex, 1);

  return reply.send('Post deleted');
};  

module.exports = {getTodosHandler, getTodoHandler, addTodoHandler, updateTodoHandler, deleteTodoHandler}