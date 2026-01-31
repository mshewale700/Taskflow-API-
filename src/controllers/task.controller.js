const Task = require("../models/Task");
const Counter = require("../models/Counter");

 
exports.createTask = async (req, res) => {
  try {
    const counter = await Counter.findOneAndUpdate(
      { name: "task_id" },
      { $inc: { value: 1 } },
      { new: true, upsert: true }
    );

    const task = await Task.create({
      task_id: counter.value,
      user_id: req.user.id,
      ...req.body
    });

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      data: {
        id: task.task_id,
        title: task.title,
        description: task.description,
        priority: task.priority,
        status: task.status,
        due_date: task.due_date,
        created_at: task.created_at
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

 
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user_id: req.user.id });

    res.json({
      success: true,
      data: tasks.map(task => ({
        id: task.task_id,
        title: task.title,
        priority: task.priority,
        status: task.status,
        due_date: task.due_date
      }))
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

 
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({ task_id: req.params.id });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found"
      });
    }

    if (task.user_id.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to access this task"
      });
    }

    res.json({
      success: true,
      data: {
        id: task.task_id,
        title: task.title,
        description: task.description,
        priority: task.priority,
        status: task.status,
        due_date: task.due_date,
        created_at: task.created_at,
        updated_at: task.updated_at
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

 
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOne({ task_id: req.params.id });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found"
      });
    }

    if (task.user_id.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to update this task"
      });
    }

    Object.assign(task, req.body);
    await task.save();

    res.json({
      success: true,
      message: "Task updated successfully",
      data: {
        id: task.task_id,
        title: task.title,
        priority: task.priority,
        status: task.status,
        updated_at: task.updated_at
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

 
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOne({ task_id: req.params.id });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found"
      });
    }

    if (task.user_id.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to delete this task"
      });
    }

    await task.deleteOne();

    res.json({
      success: true,
      message: "Task deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};
