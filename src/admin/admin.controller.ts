import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { AdminService } from './admin.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { SearchUsersDto } from './dto/search-users.dto';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    @Post(':uid')
    findOne(@Param('uid') uid:string, @Body() searchUsersDto:SearchUsersDto ) {
        return this.adminService.searchUser(+uid, searchUsersDto);
    }

    @Post(':uid')
    userUpdate(@Param('uid') uid: string, @Body() updateUserDto: UpdateUserDto) {
        return this.adminService.updateRole(+uid, updateUserDto);
    }

    @Delete(':uid')
    remove(@Param('uid') uid:string, @Body() removeUsersDto:SearchUsersDto) {
        return this.adminService.remove(+uid,removeUsersDto);
    }
}
