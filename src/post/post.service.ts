import { Injectable, NotFoundException } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
/*<<<<<<< mjBranchTest
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
=======*/
  constructor(
    private readonly postRepository: PostRepository
  ) {}

  async create(dto: CreatePostDto): Promise<Post> {
    return this.postRepository.createPost(dto);
  }

  async search(uid: number): Promise<Post[]>{
    return this.postRepository.search(uid);
  }
  
  async findTitle(title: string): Promise<Post[]>{
    return this.postRepository.findTitle(title);
  }

  async findWriter(writer: string): Promise<Post[]>{
    return this.postRepository.findWriter(writer);
  }

  async findContent(content: string): Promise<Post[]>{
    return this.postRepository.findContent(content);
  }

  async findOne(pid: number): Promise<Post> {
    return this.postRepository.findPostById(pid);
  }

  async findAll(): Promise<Post[]> {
    return this.postRepository.findAllPosts();
  }

  async update(pid: number, dto: UpdatePostDto): Promise<Post> {
    return this.postRepository.updatePost(pid, dto);
  }

  async remove(pid: number): Promise<void> {
    return this.postRepository.deletePost(pid);
//>>>>>>> mjMainTest
  }
}
