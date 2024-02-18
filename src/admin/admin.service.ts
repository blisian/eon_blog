import { Injectable, NotFoundException } from '@nestjs/common';
import { Admin } from './entities/admin.entity';
import { SearchUsersDto } from './dto/search-users.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class AdminService {
    private admins: Array<Admin> = [];
    private readonly adminUID = 1;
    
    // findAll(){
    //     return [...this.admins];
    // }

    findOne(uid:number){
        const found = this.admins.find((u)=>u.uid === uid);
        if(!found) throw new NotFoundException();
        return found;
    }
    updateRole(uid:number, updateUserDto:UpdateUserDto){
        // const found = this.findOne(updateUserDto.uid);
        // this.remove(uid,updateUserDto);
        // this.admins.push({ ...found, ...updateUserDto});
    }
    

    remove(uid:number, searchUsersDto:SearchUsersDto){
        if(!this.isAdmin(uid))  throw new NotFoundException();
        this.findOne(searchUsersDto.uid);
        this.admins = this.admins.filter((u)=>u.uid!==searchUsersDto.uid);
    }
    
    isAdmin(uid: number){
        return uid === this.adminUID;
    }

    searchUser(uid:number, searchUsersDto:SearchUsersDto){
        // const {auid, name, uid} = searchUsersDto;

        if(!this.isAdmin(uid)){ //admin User ID
            throw new NotFoundException();
        }
        const found = this.admins.find((u)=>{
            if (searchUsersDto.name && searchUsersDto.uid) {
                return u.name === searchUsersDto.name && u.uid === searchUsersDto.uid;
              }
              // 검색 조건이 name만 제공될 경우
              else if (searchUsersDto.name) {
                return u.name === searchUsersDto.name;
              }
              // 검색 조건이 uid 제공될 경우
              else if (searchUsersDto.uid) {
                return u.uid === searchUsersDto.uid;
              }
              // 검색 조건이 없을 경우 모든 사용자 반환 (이 부분은 요구사항에 따라 조정할 수 있음)
              else return false;
            });
        if(!found) throw new NotFoundException();
        return found;
    }
}
