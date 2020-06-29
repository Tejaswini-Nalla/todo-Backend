const client = require('./database/config')

exports.getTasks = (req, res) => {
    client.query('SELECT * FROM todo')
        .then(results => {
            res.status(200).json(results.rows);
        })
        .catch(err => console.log("error:", err.message))
}

exports.createTask = (req, res) => {
    const { task, subtasks } = req.body
    client.query('INSERT INTO  todo(task, subtasks) VALUES ($1, $2)', [task, subtasks])
        .then(() => res.status(201).json({ status: 'success', message: 'Task added.' }))
        .catch(err => console.log("error", err.message))
}

exports.updateTask = (req, res) => {
    const id = parseInt(req.params.id);
    const { task, subtasks } = req.body
    client.query('UPDATE todo SET task = $1, subtasks = $2 WHERE id = $3', [task, subtasks, id])
        .then(() => res.status(200).json({ status: 'success', message: 'Task Updated.' }))
        .catch(err => console.log("error", err.message));
}

exports.deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    client.query('DELETE FROM todo WHERE id = $1', [id])
        .then(() => res.status(200).json({ status: 'success', message: 'Task deleted' }))
        .catch(err => console.log("Error", err.message))
}

exports.getTaskById = (req, res) => {
    const id = parseInt(req.params.id);
    client.query('SELECT * FROM todo where id = $1', [id])
        .then((result) => res.status(200).json(result))
        .catch(err => console.log(err))
}