// "use strict";

// var fs = require("fs");
// var path = require("path");
// var Sequelize = require("sequelize");
// var env = process.env.NODE_ENV || "development";
// var config = require(path.join(__dirname, "..", "config", "config.json"))[env];
// const db = {};
// const databases = Object.keys(config.databases);
// // var sequelize = new Sequelize(
// //   config.databases.Database1.database,
// //   config.databases.Database1.username,
// //   config.databases.Database1.password,
// //   config.databases.Database1
// // );

// for (let i = 0; i < databases.length; ++i) {
//   let database = databases[i];
//   let dbPath = config.databases[database];
//   db[database] = new Sequelize(dbPath.database, dbPath.username, dbPath.password, dbPath);
// }

// // var db = {};
// // if (config.use_env_variable) {
// //   var sequelize = new Sequelize(process.env[config.use_env_variable]);
// // } else {
// //   var sequelize = new Sequelize(
// //     config.databases.Database1.database,
// //     config.databases.Database1.username,
// //     config.databases.Database1.password,
// //     config.databases.Database1
// //   );
// // }

// fs.readdirSync(__dirname + '/database1')
//   .filter(function (file) {
//     return file.indexOf(".") !== 0 && file !== "index.js";
//   })
//   // .forEach(function (file) {
//   //   var model = sequelize.import(path.join(__dirname + '/database1', file));
//   //   db[model.name] = model;
//   // });

//   .forEach(file => {
//     var model = db.ebdb.import(path.join(__dirname + '/database1', file));
//     db[model.name] = model;
// });


// Object.keys(db).forEach(function (modelName) {
//   if ("associate" in db[modelName]) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, "..", "config", "config.json"))[env];
const db = {};
const databases = Object.keys(config.databases);
/** Add Databases**/
for (let i = 0; i < databases.length; ++i) {
  let database = databases[i];
  let dbPath = config.databases[database];
  db[database] = new Sequelize(dbPath.database, dbPath.username, dbPath.password, dbPath);
}
/**Add the Database Models**/
//Add models from database1 folder
fs
  .readdirSync(__dirname + '/database1')
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = db.ebdb.import(path.join(__dirname + '/database1', file));
    db[model.name] = model;
  });
// Add models from database2 folder
fs
  .readdirSync(__dirname + '/database2')
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = db.easyconnect.import(path.join(__dirname + '/database2', file));
    db[model.name] = model;
  });
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
module.exports = db;