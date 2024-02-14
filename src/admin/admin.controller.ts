import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService:AdminService) { }

    @Get()
    findAll(){
        return this.adminService.findAll();
    }

    @Post(':uid')
    findOne(@Param('uid') uid: string){
        return this.adminService.findOne(+uid);
    }

    @Patch(':uid')
    userUpdate(@Param('uid') uid:string, @Body() updateUserDto:UpdateUserDto) {
        return this.adminService.updateRole(+uid,updateUserDto);
    }

    @Delete(':uid')
    remove(@Param('uid') uid:string){
        return this.adminService.remove(+uid);
    }
}
