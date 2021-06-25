if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}

const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('bdr7nhazfxmbdv8hsqei', 'u4m453692iroflrk', 'kiLiXOpiRjjXSpLxsYhW', {
    host: 'bdr7nhazfxmbdv8hsqei-mysql.services.clever-cloud.com',
    dialect: 'mysql'
});

const connectDB = async() =>{
    try{
        await sequelize.authenticate();
        console.log("Connection Open");
    }
    catch (e){
        console.log("Connection Failed");
    }
}

module.exports = connectDB;
global.sequelize = sequelize;