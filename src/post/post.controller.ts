import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ReturnDocument } from 'typeorm';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':pid')
  findOne(@Param('pid') pid: string) {
    return this.postService.findOne(+pid);
  }

  @Patch(':pid')
  update(@Param('pid') pid: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+pid, updatePostDto);
  }

  @Delete(':pid')
  remove(@Param('pid') pid: string) {
    return this.postService.remove(+pid);
  }

  @Get(':uid')
  search(@Query('uid') uid: string){
    return `uid : ${this.postService.search(+uid)}`;
  }
}
