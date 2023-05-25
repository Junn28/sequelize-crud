module.exports = (sequelize, Sequelize) => {
  const Biodata = sequelize.define('biodata', {
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tempat_lahir: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tanggal_lahir: {
      type: Sequelize.DATEONLY,
    },
    alamat: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return Biodata;
};
