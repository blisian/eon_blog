import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { typeORMConfigPost, typeORMConfigUser } from './configs/typeorm.config';

@Module({
  imports: [
      PostModule,
      TypeOrmModule.forRoot(typeORMConfigPost),
      TypeOrmModule.forRoot(typeORMConfigUser),
      UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
