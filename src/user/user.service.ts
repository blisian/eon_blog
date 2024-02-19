import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}
  
  async findEmailCheck(email: string): Promise<User>{
    return this.userRepository.findEmailCheck(email);
  }

  async create(dto: UserDto): Promise<User> {
    return this.userRepository.createUser(dto);
  }

  async findOne(uid: number): Promise<User> {
    return this.userRepository.findUserById(uid);
  }

  async update(uid: number, dto: UpdateUserDto): Promise<User> {
    return this.userRepository.updateUser(uid, dto);
  }
}
