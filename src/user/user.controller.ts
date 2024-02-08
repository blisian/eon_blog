import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @Post()
    create(@Body() createPostDto: UserDto) {
      return this.userService.create(createPostDto);
    }

    @Get(':uid')
    findOne(@Param('uid') uid: number) {
      return this.userService.findOne(uid);
    }

    @Patch(':uid')
    update(@Param('uid') uid: string, @Body() updateUserDto: UpdateUserDto) {
      return this.userService.update(+uid, updateUserDto);
    }
}
