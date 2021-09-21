module.exports = {
    HOST: "localhost",
    USER: "qa-admindb",
    PORT: "3306",
    PASSWORD: "123456",
    DB: "qa-admindb",
    dialect: "mysql",
    pool: {
      max: 100,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;