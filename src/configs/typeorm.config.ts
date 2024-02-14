import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Post } from "src/post/entities/post.entity";
import { User } from "src/user/entities/user.entity";

export const typeORMConfigPost : TypeOrmModuleOptions= {
    type: 'mysql',
    host: 'localhost',
    port: 3305,
    username: 'root',
    password: '2020wjswk',
    database: 'post',
    entities: [
        Post, User
      ],
    synchronize: true,
}

export const typeORMConfigUser : TypeOrmModuleOptions= {
    type: 'mysql',
    host: 'localhost',
    port: 3305,
    username: 'root',
    password: '2020wjswk',
    database: 'user',
    entities: [
        Post, User
      ],
    synchronize: true,
}