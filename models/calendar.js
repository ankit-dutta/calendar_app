const { Sequelize, DataTypes } = require('sequelize');

const Calendar = sequelize.define('Calendar', {
    id:{
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
        primaryKey:true
      },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    work: {
      type:DataTypes.STRING
    },
    body: {
      type: DataTypes.STRING
    }
  }, {
  });

  //CREATING TABLE

  Calendar.sync()
  .then(()=>{
      console.log("Table Created");
  })
  .catch((err) =>{
      console.log("Could Not create the teble");
      console.log(err);
  })

  //EXPORTING
  module.exports = Calendar;