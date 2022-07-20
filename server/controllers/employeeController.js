const Employee = require('../models/employee');

const employee_get_all = (req, res) => {
  Employee.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      // const data = result.json();
      return res.status(200).json({
        ok: true,
        data: result,
      });
    })
    .catch((err) => console.log(err));
};

const employee_create = (req, res) => {
  console.log(req.body);
  const employee = new Employee(req.body);
  employee
    .save()
    .then(
      res.send({
        body: employee,
      })
    )
    .catch((err) => console.log(err));
};

module.exports = {
  employee_get_all,
  employee_create,
};
