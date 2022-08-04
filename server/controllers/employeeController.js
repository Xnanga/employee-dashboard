const Employee = require('../models/employee');

const employee_get_all = (req, res) => {
  Employee.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      return res.status(200).json({
        ok: true,
        data: result,
      });
    })
    .catch((err) => console.log(err));
};

const employee_create = (req, res) => {
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

const employee_delete = (req, res) => {
  const queriedEmployeeId = req.params.id;
  Employee.remove({ _id: queriedEmployeeId }, { justOne: true })
    .then(
      res.send({
        body: queriedEmployeeId,
      })
    )
    .catch((err) => console.log(err));
};

const employee_edit = (req, res) => {
  const queriedEmployeeId = req.params.id;
  // Employee.remove({ _id: queriedEmployeeId }, { justOne: true })
  //   .then(
  //     res.send({
  //       body: queriedEmployeeId,
  //     })
  //   )
  //   .catch((err) => console.log(err));
};

module.exports = {
  employee_get_all,
  employee_create,
  employee_delete,
  employee_edit,
};
