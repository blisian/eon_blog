import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly repository: Repository<Post>
  ) {}

  async create(dto: CreatePostDto): Promise<Post> {
    const post = this.repository.create({
      ...dto,
      recommand: 0,
      check: 0,
      createdDate: new Date(),
    });
    await this.repository.save(post);
    return post;
  }

  async findAll(): Promise<Post[]> {
    return this.repository.find();
  }

  async findOne(pid: number): Promise<Post> {
    const post = await this.repository.findOne({ where: { pid } });
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  async update(pid: number, dto: UpdatePostDto): Promise<Post> {
    const post = await this.findOne(pid);
    this.repository.merge(post, dto);
    post.editDate = new Date();
    await this.repository.save(post);
    return post;
  }

  async remove(pid: number): Promise<void> {
    await this.repository.delete(pid);
  }

  async search(uid: number): Promise<Post>{
    const found = await this.repository.findOne({ where: { uid } });
    if (!found) {
      throw new NotFoundException('Post not found');
    }
    return found;
  }
}
