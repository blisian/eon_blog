import { Injectable, NotFoundException } from '@nestjs/common';
import { Admin } from './entities/admin.entity';
import { SearchUsersDto } from './dto/search-users.dto';
import { UpdateUserDto } from './dto/update-user.dto';



@Injectable()
export class AdminService {
    private admins: Array<Admin> = []; //admins = user database
    private readonly adminUID = 1;
    private readonly data = {
        auid: 1,
        name: 'MJ',
        email: 'mj@example.com', // 이메일은 문자열로 표현
        role: ['1', '2', '3']
    };

    findAll(uid: number) {
        this.isAdmin(uid);
        return [...this.admins];
    }

    // findOne(searchUsersDto:SearchUsersDto) {
    //     this.isAdmin(searchUsersDto.auid);
    //     if(!searchUsersDto.name){

    //     }
    //     const found = this.admins.find((u) => u.name === searchUsersDto.name);
    //     if (!found) throw new NotFoundException();
    //     return found;
    // }

    updateRole(updateUserDto: UpdateUserDto) {
        if (!updateUserDto.name) {
            const found = this.searchUser(updateUserDto);
            this.remove(updateUserDto);
            this.admins.push({ ...found, ...updateUserDto.role });
        }
    }

    remove(removeUsersDto: SearchUsersDto ) {
        this.isAdmin(removeUsersDto.auid);
        // this.searchUser(removeUsersDto);
        this.admins = this.admins.filter((u) => u.uid !== removeUsersDto.uid);
    }

    isAdmin(uid: number) {
        if (uid !== this.adminUID) {
            throw new NotFoundException("Access Denied");
        }
    }

    searchUser(searchUsersDto: SearchUsersDto) {
        // const {auid, name, uid} = searchUsersDto;
        this.isAdmin(searchUsersDto.auid);

        const found = this.admins.find((u) => {
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
            else return [];
        });
        if (!found) throw new NotFoundException();
        return found;
    }
}
