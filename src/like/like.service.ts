// like.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Like } from './entities/like.entities';

@Injectable()
export class likeService {
  private like:Like[] = [];

  getAll():Like[]{
    return this.like;
  }

  getTitle
}
