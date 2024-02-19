import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";

export const typeORMConfigUser : TypeOrmModuleOptions= {
    name: 'userDB',
    type: 'mysql',
    host: 'localhost',
    port: 3305,
    username: 'root',
    password: '2020wjswk',
    database: 'user',
    entities: [
        User
      ],
    synchronize: true,
    logging: true
}