import {DataSource} from "typeorm";

export const AppDataSource= new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '12345678',
    database: 'case5',
    synchronize: true,
    entities: ['dist/src/model/*.js']
})