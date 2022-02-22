const {Sequelize, DataTypes} = require("sequelize");
const config = require("../../config/database");
const db = {};

db.connection = new Sequelize(config.database, config.username, config.password, {
    host : config.host,
    dialect : config.dialect
});

//vinculamos a nuestros modelos a DB
db.User = require("../models/User")(db.connection, DataTypes);
db.Address = require("../models/Address")(db.connection, DataTypes);

//asociar los modelos
db.User.associate(db);
db.Address.associate(db);

module.exports = db;