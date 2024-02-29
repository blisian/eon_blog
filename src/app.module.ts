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
import { ReplyService } from './reply/reply.service';
import { ReplyController } from './reply/reply.controller';
import { ReplyModule } from './reply/reply.module';
import { AdminService } from './admin/admin.service';
import { AdminController } from './admin/admin.controller';
import { AdminModule } from './admin/admin.module';



@Module({
  imports: [PostModule, LikeModule, CommentModule, ReplyModule, AdminModule],
  controllers: [AppController, LikeController, CommentController, ReplyController, AdminController],
  providers: [AppService, LikeService, CommentService, ReplyService, AdminService],
})
export class AppModule {}
