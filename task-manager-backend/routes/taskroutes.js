const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error });
    }
});

/// Create a new task
router.post('/', async (req, res) => {
    try {
        const { title, description, status } = req.body;

        // Get all tasks
        const tasks = await Task.find();

        // Allow the first "To Do" task without restriction
        if (tasks.length === 0 || status !== 'To Do') {
            const task = new Task({ title, description, status });
            await task.save();
            return res.status(201).json(task);
        }

        // Check if "To Do" tasks are >= 50% of total tasks
        const todoCount = tasks.filter(task => task.status === 'To Do').length;
        if (todoCount >= Math.ceil(tasks.length / 2)) {
            return res.status(400).json({ message: 'Cannot add more "To Do" tasks as they exceed 50% of total tasks.' });
        }

        // Create and save the task
        const task = new Task({ title, description, status });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: 'Error creating task', error });
    }
});



// Update a task
router.put('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ message: 'Error updating task', error });
    }
});

// Delete a task
router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
    }
});

module.exports = router;
