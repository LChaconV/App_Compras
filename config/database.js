import { Sequelize } from "sequelize";
const conexion = new Sequelize (
    'SchoolProject_BD',
    'postgres',
    '1234',
    {
        host:'localhost',
        port: 5432,
        dialect: 'postgres'
    }
);
export default conexion;   