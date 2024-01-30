import { Injectable, NotFoundException } from '@nestjs/common';
import { Board } from './entities/posting.entities';
import { CreateBoardDTO } from 'src/dto/posting.dto';

@Injectable()
export class PostingService {
    private board:Board[] = [];

    getAll():Board[]{
        return this.board;
    }

    getTitle(title:string): Board{
        const boardTitle = this.board.find(board=>board.title===title);
        if(!title){
            // throw new NotFoundException('Board with Title ${title} not found');
        }

        return boardTitle;
    }

    create(boardData:CreateBoardDTO){
        this.board.push({
            post_id: this.board.length + 1,
            ...boardData,
        })
    }

}

