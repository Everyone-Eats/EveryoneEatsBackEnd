const app = require('./server');
const http = require('http').createServer(app);

app.use(function(req, res, next) {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.set('Access-Control-Allow-Credentials', true);
  next();
});

const io = require('socket.io')(http, { origins: 'http://localhost:3000' });

io.set('transports', ['websocket']);

io.origins((origin, callback) => {
  if (origin !== 'http://localhost:3000') {
    return callback('origin not allowed', false);
  }
  callback(null, true);
});

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.broadcast.emit('message', {
    topic: 'new_connection',
    message: 'user'
  });
});

const port = process.env.PORT || 8000;

http.listen(port, () => console.log(`Everyone Eats API running on ${port}`));

module.exports = app;
