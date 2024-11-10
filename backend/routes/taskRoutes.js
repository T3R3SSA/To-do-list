const express = require('express');
const router = express.Router();
const Task = require('../models/taskModel.js'); // Asegúrate de que este es tu modelo

// Crear una nueva tarea
router.post('/tasks', async (req, res) => {
    try {
        const newTask = new Task({
            id: req.body.id,
            task: req.body.task,
            completed: req.body.completed || false,
        });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la tarea', error });
    }
});

// Actualizar una tarea
router.put('/tasks/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la tarea', error });
    }
});

// Eliminar una tarea
router.delete('/tasks/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'Tarea eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la tarea', error });
    }
});

module.exports = router;