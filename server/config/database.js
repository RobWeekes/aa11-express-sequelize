module.exports = {
  development: {
    storage: process.env.DB_FILE,
    dialect: "sqlite",
    seederStorage: "sequelize",
    benchmark: true,
    logQueryParameters: true,
    typeValidation: true,
    logging: console.log
    // logging: false
    // A false is commented out here as a reminder that this
    // functionality can be disabled or overwritten with a
    // different function if desired, something which may
    // occasionally be helpful in debugging Express applications
    // in order to clean up the console.
  },
};
