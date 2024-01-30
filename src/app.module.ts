import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { LikeService } from './like/like.service';
import { LikeController } from './like/like.controller';
import { LikeModule } from './like/like.module';
import { CommentService } from './comment/comment.service';
import { CommentModule } from './comment/comment.module';
import { CommentController } from './comment/comment.controller';


@Module({
  imports: [PostModule, LikeModule, CommentModule],
  controllers: [AppController, LikeController, CommentController],
  providers: [AppService, LikeService, CommentService],
})
export class AppModule {}
