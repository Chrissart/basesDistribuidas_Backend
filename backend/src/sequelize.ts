import { Sequelize } from 'sequelize';
import fs from 'fs';


const sequelize = new Sequelize('juicios', 'root', '1111', {
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
        fs.appendFileSync('sequelize.log', msg + '\n');
      }
});

export default sequelize;