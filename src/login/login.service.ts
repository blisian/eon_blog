import { Injectable } from '@nestjs/common';
import { Login } from './entities/login.entity';

@Injectable()
export class LoginService {
    private logins:Array<Login> = [];
     
    login(uid:number){

    }
}
