import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginsDto } from './dto/logins.dto';

@Controller('login')
export class LoginController {
    constructor(private readonly loginService:LoginService){}

    // @Post(':uid'){
    //     logins(@Body() loginsDto:LoginsDto){
    //         return true;
    //     }
    // }
}
