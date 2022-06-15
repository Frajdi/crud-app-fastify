
const fastify = require('fastify')({
    logger: true
  })


  fastify.get('/', function (req, reply){
    reply.send([
      { id: 1, title: 'Todo One', body: 'This is post one' },
      { id: 2, title: 'Todo Two', body: 'This is post two' },
      { id: 3, title: 'Todo Three', body: 'This is post three' },
    ]);
  });

  fastify.register(require('./routes/todos'))

  fastify.listen({ port: 3000}, function(err, address) {
    if(err) {
        fastify.log.error(err)
        process.exit(1)
    }
  })