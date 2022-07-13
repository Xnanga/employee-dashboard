const Employee = require('../models/employee');

const employee_get_all = (req, res) => {
  Employee.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      return result.json();
    })
    .catch((err) => console.log(err));
};

const employee_create = (req, res) => {
  console.log(req);
  const employee = new Employee(req.body);
  employee.save().catch((err) => console.log(err));
};

module.exports = {
  employee_get_all,
  employee_create,
};
