import { Injectable, NotFoundException } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostRepository
  ) {}

  async create(dto: CreatePostDto): Promise<Post> {
    return this.postRepository.createPost(dto);
  }

  async findAll(): Promise<Post[]> {
    return this.postRepository.findAllPosts();
  }

  async findOne(pid: number): Promise<Post> {
    return this.postRepository.findPostById(pid);
  }

  async update(pid: number, dto: UpdatePostDto): Promise<Post> {
    return this.postRepository.updatePost(pid, dto);
  }

  async remove(pid: number): Promise<void> {
    return this.postRepository.deletePost(pid);
  }

  async search(uid: number): Promise<Post>{
    return this.postRepository.searchPostByUserId(uid);
  }
}
