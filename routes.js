module.exports = (app) => {
    const tasks = require('./todotask.controller.js')

    app.get('/tasks', tasks.getTasks);
    app.post('/tasks', tasks.createTask);
    app.put('/tasks/:id', tasks.updateTask);
    app.delete('/tasks/:id', tasks.deleteTask);
}