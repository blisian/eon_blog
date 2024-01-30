import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  private posts: Array<Post> = [];
  private pid = 0;

  create(createPostDto: CreatePostDto) {
    this.posts.push({
      pid: ++this.pid,
      ...createPostDto,
      recommand: 0,
      check: 0,
      createdDate: new Date(),
    });
  }

  findAll() {
    return [...this.posts];
  }

  findOne(pid: number) {
    const found = this.posts.find((p) => p.pid === pid);
    if (!found) throw new NotFoundException();
    return found;
  }

  update(pid: number, updatePostDto: UpdatePostDto) {
    const found = this.findOne(pid);
    this.remove(pid);
    this.posts.push({ ...found, ...updatePostDto, editDate: new Date() });
  }

  remove(pid: number) {
    this.findOne(pid);
    this.posts = this.posts.filter((p) => p.pid !== pid);
  }
}
