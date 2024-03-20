import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Auth } from 'src/common/decorator/auth.decorator';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Auth()
  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @Auth()
  @Patch(':cid')
  update(
    @Param('cid') cid: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return this.commentService.update(+cid, updateCommentDto);
  }

  @Auth()
  @Delete(':cid')
  remove(@Param('cid') cid: string) {
    return this.commentService.remove(+cid);
  }

  @Auth()
  @Get(':cid')
  find(@Param('cid') cid: string) {
    return this.commentService.findOne(+cid);
  }
}
