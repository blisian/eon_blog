import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateBoardDTO{
    @IsNumber()
    readonly board_id:number;
    @IsNumber()
    readonly user_id:number;
    @IsNumber()
    readonly date:number;
    @IsString()
    readonly title: string;
    @IsString()
    readonly content: string;
    @IsString({each:true})
    readonly type: string[];
    @IsOptional()
    @IsNumber()
    readonly edit_date:number;
    
}