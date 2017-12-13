var env = process.env.NODE_ENV || 'development';
console.log('env *****', env);
if( env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if( env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
} else if( env === 'production' ) {
  process.env.MONGODB_URI = 'mongodb://lincxx:ADIdas1212@ds137826.mlab.com:37826/todo'
}