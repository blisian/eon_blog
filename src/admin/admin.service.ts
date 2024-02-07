import { Injectable, NotFoundException } from '@nestjs/common';
import { Admin } from './entities/admin.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class AdminService {
    private admins: Array<Admin> = [];
    
    findAll(){
        return [...this.admins];
    }

    findOne(uid:number){
        const found = this.admins.find((u)=>u.uid === uid);
        if(!found) throw new NotFoundException();
        return found;
    }
    updateRole(uid:number, updateUserDto:UpdateUserDto){
        const found = this.findOne(uid);
        this.remove(uid);
        this.admins.push({ ...found, ...updateUserDto});
    }

    remove(uid: number){
        this.findOne(uid);
        this.admins = this.admins.filter((u)=>u.uid!==uid);
    }
}
