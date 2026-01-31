const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth.middleware");
const taskController = require("../controllers/task.controller");
const validate = require("../middlewares/validate.middleware");
//const { createTaskValidation } = require("../validations/task.validation");
const { createTaskValidation, updateTaskValidation } = require("../validations/task.validation");

router.put("/:id", auth, updateTaskValidation, validate, taskController.updateTask);


router.post("/", auth, createTaskValidation, validate, taskController.createTask);
router.get("/", auth, taskController.getTasks);
router.get("/:id", auth, taskController.getTaskById);
router.put("/:id", auth, updateTaskValidation, validate, taskController.updateTask);

//router.put("/:id", auth, createTaskValidation, validate, taskController.updateTask);
router.delete("/:id", auth, taskController.deleteTask);

module.exports = router;
