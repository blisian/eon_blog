import { Module } from '@nestjs/common';
import { PostingService } from './posting.service';
import { PostingController } from './posting.controller';

@Module({
  controllers:[PostingController],
  providers: [PostingService]
})
export class PostingModule {}
