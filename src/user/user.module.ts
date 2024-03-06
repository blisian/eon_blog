import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { typeORMConfigUser } from 'src/configs/typeorm1.config';

@Module({
  imports: [
    TypeOrmModule.forFeature([User], 'userDB'),
    TypeOrmModule.forRoot(typeORMConfigUser)
  ],
  exports: [TypeOrmModule, UserRepository],
  providers: [UserService, UserRepository],
  controllers: [UserController]
})
export class UserModule {}
