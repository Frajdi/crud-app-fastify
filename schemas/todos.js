const typeString = {type: 'string'};

const todo = {
  type: 'object',
  properties: {
    id: {type: 'integer'},
    title: typeString,
    body: typeString
  }
}

const getTodosSchema = {
    response: {
      200: {
        type: 'array',
        todos: todo,
        },
      },
    };

  const getTodoSchema = {
    params: {
      id: {type: 'integer'},
    },
    response: {
      200: todo,
      },
    };

    const addTodoSchema = {
      body: {
        type: 'object',
        required: ['title', 'body'],
        properties: {
          title: typeString, 
          body: typeString,
        },
      },
      response: {
        200: typeString, 
      },
    };

    const updateTodoSchema = {
      body: {
        type: 'object', 
        required: ['title', 'body'],
        properties: {
          title : typeString,
          body: typeString,
        },
      },
      params: {
        id: {type: 'integer'},
      },
      response: {
        200: typeString,
      },
    };

    const deleteTodoSchema = {
      params: {
        id: {type : 'integer'},
      },
      response: {
        200: typeString
      },
    };

  module.exports = {getTodosSchema, getTodoSchema, addTodoSchema, updateTodoSchema, deleteTodoSchema}