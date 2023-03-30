"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const fs_1 = __importDefault(require("fs"));
const sequelize = new sequelize_1.Sequelize('juicios', 'root', '1111', {
    username: 'root',
    password: '1111',
    database: 'juicios',
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    define: {
        timestamps: false
    },
    logging: msg => {
        fs_1.default.appendFileSync('sequelize.log', msg + '\n');
    }
});
exports.default = sequelize;
//# sourceMappingURL=sequelize.js.map