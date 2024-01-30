// like.controller.ts
import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { likeService } from './like.service';

@Controller('like')
export class likeController {
  constructor(private readonly likeService: likeService) {}

  @Post('recommend')
  recommend(
    @Body('us') userId: number,
    @Body('postId') postId: number,
    @Body('recommendationId') recommendationId: number,
  ) {
    if (!userId || !postId || !recommendationId) {
      throw new BadRequestException('userId, postId, and recommendationId are required.');
    }

    this.likeService.recommend(userId, postId, recommendationId);
    return { message: 'Recommendation recorded successfully.' };
  }
}
