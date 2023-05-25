const db = require('../models/index');
const Biodata = db.biodata;
const Op = db.Sequelize.Op;

module.exports = {
  create(req, res) {
    const dataBio = {
      nama: req.body.nama,
      tempat_lahir: req.body.tempatLahir,
      tanggal_lahir: req.body.tanggalLahir,
      alamat: req.body.alamat,
    };

    if (!dataBio.nama) {
      res.status(400).send({
        message: 'nama cannot be empty',
      });
      return;
    }

    Biodata.create(dataBio)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(400).send({
          message: 'error occured while inserting biodata' || err.message,
        });
      });
  },

  findAll(req, res) {
    Biodata.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: 'error while retrieving biodata' || err.message,
        });
      });
  },

  findOne(req, res) {
    Biodata.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: 'error while finding biodata' || err.message,
        });
      });
  },

  delete(req, res) {
    Biodata.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(
        res.send({
          message: 'success delete biodata',
        })
      )
      .catch((err) => {
        res.status(500).send({
          message: 'could not delete biodata' || err.message,
        });
      });
  },

  update(req, res) {
    const updateBio = {
      nama: req.body.nama,
      tempat_lahir: req.body.tempatLahir,
      tanggal_lahir: req.body.tanggalLahir,
      alamat: req.body.alamat,
    };

    Biodata.update(updateBio, {
      where: {
        id: req.params.id,
      },
    })
      .then(
        res.send({
          message: 'success update biodata',
        })
      )
      .catch((err) => {
        res.status(400).send({
          message: 'error while update biodata' || err.message,
        });
      });
  },
};
