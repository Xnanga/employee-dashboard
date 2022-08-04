const Employee = require('../models/employee');

const notFoundResponse = (res, err) => {
  return res.status(404).json({
    ok: false,
    data: err,
  });
};

const employee_get_all = (req, res) => {
  Employee.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      return res.status(200).json({
        ok: true,
        data: result,
      });
    })
    .catch((err) => {
      console.err(err);
      return notFoundResponse(res, err);
    });
};

const employee_get_one = (req, res) => {
  Employee.find({ _id: req.params.id })
    .then((result) => {
      return res.status(200).json({
        ok: true,
        data: result,
      });
    })
    .catch((err) => {
      console.err(err);
      return notFoundResponse(res, err);
    });
};

const employee_create = (req, res) => {
  const employee = new Employee(req.body);
  employee
    .save()
    .then(res.send({ body: employee }))
    .catch((err) => {
      console.err(err);
      return res.status(500).json({
        ok: false,
        data: err,
      });
    });
};

const employee_delete = (req, res) => {
  Employee.deleteOne({ _id: req.params.id }, { justOne: true })
    .then(
      res.send({
        body: req.params.id,
      })
    )
    .catch((err) => {
      console.err(err);
      return notFoundResponse(res, err);
    });
};

const employee_edit = (req, res) => {
  Employee.replaceOne({ _id: req.params.id }, req.body)
    .then((result) => {
      return res.status(200).json({
        ok: true,
        data: result,
      });
    })
    .catch((err) => {
      console.err(err);
      return notFoundResponse(res, err);
    });
};

module.exports = {
  employee_get_all,
  employee_get_one,
  employee_create,
  employee_delete,
  employee_edit,
};
