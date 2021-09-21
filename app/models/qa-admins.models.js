module.exports = (sequelize, Sequelize) => {
    const QA-Admins = sequelize.define("qa-admins", {
      id: {
        type: Sequelize.BOOLEAN
      },
      name: {
        type: Sequelize.STRING
      },
      photo_path: {
        type: Sequelize.STRING
      },
      cert_path: {
        type: Sequelize.STRING
      },
      profile: {
        type: Sequelize.STRING
      },
      isPublished: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return QA-Admins;
  };