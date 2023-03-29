import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('juicios', 'root', '111', {
    username: 'root',
    password: '1111',
    database: 'juicios',
    host: 'localhost',
    dialect: 'mysql',
    logging: true
});

export default sequelize;
