const router = require("express").Router();
const auth = require("../controllers/auth.controller");
const validate = require("../middlewares/validate.middleware");
const { registerValidation } = require("../validations/auth.validation");

router.post("/register", registerValidation, validate, auth.register);
router.post("/login", auth.login);

module.exports = router;
