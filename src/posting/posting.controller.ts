import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { PostingService } from './posting.service';
import { Board } from './entities/posting.entities';
import { CreateBoardDTO } from 'src/dto/posting.dto';

@Controller('posting')
export class PostingController {
    constructor(private readonly postingService: PostingService){}

    @Get()
    getAll(@Req() req,@Res() res):Board[]{
        const boards = this.postingService.getAll();
        res.json(boards)
        return boards;
    }

    @Post()
    create(@Body() boardData:CreateBoardDTO){
        return this.postingService.create(boardData);
    }
}
