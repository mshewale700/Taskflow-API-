const { body } = require("express-validator");

 
exports.createTaskValidation = [
  body("title")
    .trim()
    .escape()
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters"),

  body("priority")
    .optional()
    .isIn(["low", "medium", "high"])
    .withMessage("Priority must be low, medium, or high"),

  body("status")
    .optional()
    .isIn(["pending", "in_progress", "completed"])
    .withMessage("Invalid status value"),

  body("due_date")
    .optional()
    .custom((value) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (new Date(value) < today) {
        throw new Error("Due date cannot be in the past");
      }
      return true;
    })
];

 
exports.updateTaskValidation = [
  body("title")
    .optional()
    .trim()
    .escape()
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters"),

  body("priority")
    .optional()
    .isIn(["low", "medium", "high"])
    .withMessage("Priority must be low, medium, or high"),

  body("status")
    .optional()
    .isIn(["pending", "in_progress", "completed"])
    .withMessage("Invalid status value"),

  body("due_date")
    .optional()
    .custom((value) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (new Date(value) < today) {
        throw new Error("Due date cannot be in the past");
      }
      return true;
    })
];
