import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PostRepository } from './post.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post])
  ],
  exports: [TypeOrmModule, PostRepository],
  controllers: [PostController],
  providers: [PostService, PostRepository],
})
export class PostModule {}
