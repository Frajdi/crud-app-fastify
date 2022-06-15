const {getTodosSchema, getTodoSchema, addTodoSchema, updateTodoSchema, deleteTodoSchema} = require('../schemas/todos')
const {getTodosHandler,getTodoHandler, addTodoHandler, updateTodoHandler, deleteTodoHandler} = require('../handlers/todos')

const getTodosOpts = {
    schema: getTodosSchema,
    handler: getTodosHandler,
  };

  const getTodoOpts = {
    schema: getTodoSchema,
    handler: getTodoHandler,
  }

  const addTodoOpts = {
    schema: addTodoSchema,
    handler: addTodoHandler,
  }

  const updateTodoOpts = {
    schema: updateTodoSchema,
    handler: updateTodoHandler,
  };

  const deleteTodoOpts = {
    schema : deleteTodoSchema,
    handler: deleteTodoHandler,
  };

const postTodos = (fastify, opts, done) => {
    fastify.get('/api/todos', getTodosOpts);
    fastify.get('/api/todos/:id', getTodoOpts);
    fastify.post('/api/todos/new', addTodoOpts);
    fastify.put('/api/todos/edit/:id', updateTodoOpts);
    fastify.delete('/api/todos/:id', deleteTodoOpts)
    done();
}


module.exports = postTodos