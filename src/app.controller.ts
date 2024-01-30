import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get()
  home(){
    return "Welcome to boardData API";
  }
}
