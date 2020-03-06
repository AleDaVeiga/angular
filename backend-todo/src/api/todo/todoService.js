const Todo = require('./todo')
const errorHandler = require('../common/errorHandler')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new: true, runValidators: true})
Todo.after('post', errorHandler).after('put', errorHandler)

module.exports = Todo