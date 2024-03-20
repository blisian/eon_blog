import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { SearchUsersDto } from './dto/search-users.dto';
import { Auth } from 'src/common/decorator/auth.decorator';
import { Role } from 'src/user/entities/user.entity';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @Get()
  @Auth([Role.Admin])
  findAll(@Body() uid: string) {
    return this.adminService.findAll(+uid);
  }

  @Auth([Role.Admin])
  @Post('search')
  findOne(@Body() searchUsersDto: SearchUsersDto) {
    return this.adminService.searchUser(searchUsersDto);
  }

  @Auth([Role.Admin])
  @Post('user')
  updateRole(@Body() updateUserDto: UpdateUserDto) {
    return this.adminService.updateRole(updateUserDto);
  }

  @Auth([Role.Admin])
  @Delete('user')
  removeUser(@Body() removeUsersDto: SearchUsersDto) {
    return this.adminService.remove(removeUsersDto);
  }
}
