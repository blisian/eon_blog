import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { SearchUsersDto } from './dto/search-users.dto';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    @Post(':auid')
    findOne(@Param('auid') auid: string,@Body() searchUsersDto:SearchUsersDto ) {
        return this.adminService.searchUser(+auid, searchUsersDto);
    }

    // @Patch(':uid')
    // userUpdate(@Param('uid') uid: string, @Body() updateUserDto: UpdateUserDto) {
    //     return this.adminService.updateRole(+uid, updateUserDto);
    // }

    @Delete(':auid')
    remove(@Param('auid') auid: string, @Body() uid: string) {
        return this.adminService.remove(+auid, +uid);
    }
}
