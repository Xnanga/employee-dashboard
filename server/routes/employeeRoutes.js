const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

router.get("/api/get-all-employees", employeeController.employee_get_all);
router.post("/api/create-employee", employeeController.employee_create);

module.exports = router;
