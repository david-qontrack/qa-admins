module.exports = (sequelize, Sequelize) => {
    const QA-Admin-APIs = sequelize.define("qa-admin-apis", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return QA-Admin-APIs;
  };