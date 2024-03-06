import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
/*<<<<<<< mjBranchTest

@Module({
  controllers: [PostController],
  providers: [PostService],
=======*/
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PostRepository } from './post.repository';
import { typeORMConfigPost } from 'src/configs/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
    TypeOrmModule.forRoot(typeORMConfigPost)
  ],
  exports: [TypeOrmModule, PostRepository],
  providers: [PostService, PostRepository],
  controllers: [PostController],
//>>>>>>> mjMainTest
})
export class PostModule {}
