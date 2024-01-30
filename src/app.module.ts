import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { PostingController } from './posting/posting.controller';
import { PostingModule } from './posting/posting.module';
import { likeController } from './like/like.controller';
import { likeService } from './like/like.service';
import { likeModule } from './like/like.module';

@Module({
  imports: [PostingModule, likeModule],
  controllers: [AppController, likeController],
  providers: [likeService],
})
export class AppModule {}
