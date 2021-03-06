const { url } = require("inspector");

module.exports = (sequelize, Sequelize) => {
    const QA-Admin-APIs = sequelize.define("qa-admin-apis", {
      id: {
        type: Sequelize.BOOLEAN
      },
      api-title: {
        type: Sequelize.STRING
      },
      api-description: {
        type: Sequelize.STRING
      },
      api-url: {
        type: Sequelize.URL
      },
      api-username: {
        type: Sequelize.STRING
      },
      api-password: {
        type: Sequelize.STRING
      },
      isPublished: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return QA-Admin-APIs;
  };