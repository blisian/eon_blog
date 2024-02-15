import { Injectable, NotFoundException } from '@nestjs/common';
import { Admin } from './entities/admin.entity';
import { SearchUsersDto } from './dto/search-users.dto';
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
    // updateRole(uid:number, updateUserDto:UpdateUserDto){
    //     const found = this.findOne(uid);
    //     this.remove(uid);
    //     this.admins.push({ ...found, ...updateUserDto});
    // }
    

    remove(auid:number ,uid: number){
        if(!this.isAdmin(auid))  throw new NotFoundException();
        this.findOne(uid);
        this.admins = this.admins.filter((u)=>u.uid!==uid);
    }
    
    isAdmin(uid: number){
        return uid === this.adminUID;
    }

    searchUser(auid:number ,searchUsersDto:SearchUsersDto){
        const {name, uid} = searchUsersDto;

        if(!this.isAdmin(auid)){ //admin User ID
            throw new NotFoundException();
        }
        const found = this.admins.find((u)=>{
            if (name && uid) {
                return u.name === name && u.uid === uid;
              }
              // 검색 조건이 name만 제공될 경우
              else if (name) {
                return u.name === name;
              }
              // 검색 조건이 uid 제공될 경우
              else if (uid) {
                return u.uid === uid;
              }
              // 검색 조건이 없을 경우 모든 사용자 반환 (이 부분은 요구사항에 따라 조정할 수 있음)
              else return false;
            });
        if(!found) throw new NotFoundException();
        return found;
    }
}
