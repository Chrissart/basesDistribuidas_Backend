"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('juicios', 'root', '111', {
    username: 'root',
    password: '1111',
    database: 'juicios',
    host: 'localhost',
    dialect: 'mysql',
    logging: true
});
exports.default = sequelize;
//# sourceMappingURL=sequelize.js.map