// like.module.ts
import { Module } from '@nestjs/common';
import { likeController } from './like.controller';
import { likeService } from './like.service';

@Module({
  controllers: [likeController],
  providers: [likeService],
})
export class likeModule {}
