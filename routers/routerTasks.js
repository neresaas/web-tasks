const express = require('express');
let routerTasks = express.Router();
let tasks = require('../data/tasks')
// Método especial para motores de plantillas: render
routerTasks.get('/', (req, res) => {
    res.render('pageTasks', {
        message: 'ejemplo',
        tasks: tasks
    })
});

routerTasks.post('/', (req, res) => {
    let text = req.body.text
    let lastId = tasks[tasks.length-1].id
    tasks.push(
        { id: lastId+11,
        text: text
        }
    )
    res.redirect('/tasks')
});

module.exports = routerTasks;