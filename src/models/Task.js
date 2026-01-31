const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    task_id: {
      type: Number,
      unique: true
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    title: {
      type: String,
      required: true,
      minlength: 3
    },
    description: {
      type: String
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      required: true
    },
    status: {
      type: String,
      enum: ["pending", "in_progress", "completed"],
      default: "pending"
    },
    due_date: {
      type: Date
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

module.exports = mongoose.model("Task", taskSchema);
