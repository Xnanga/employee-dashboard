const express = require('express');
const employeeController = require('../controllers/employeeController');

const router = express.Router();

router.get('/api/get-all-employees', employeeController.employee_get_all);
router.post('/api/create-employee', employeeController.employee_create);
router.delete(
  '/api/delete-employee&id=:id',
  employeeController.employee_delete
);
router.put('/api/edit-employee&id=:id', employeeController.employee_edit);

module.exports = router;
