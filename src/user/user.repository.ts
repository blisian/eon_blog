import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>
  ) {}

  async createUser(dto: UserDto): Promise<User> {
    const user = this.repository.create({
      ...dto,
      creationDate: new Date(),
    });
    await this.repository.save(user);
    return user;
  }

  async findUserById(uid: number): Promise<User> {
    const user = await this.repository.findOne({ where: { uid } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async updateUser(uid: number, dto: UpdateUserDto): Promise<User> {
    const user = await this.findUserById(uid);
    this.repository.merge(user, dto);
    await this.repository.save(user);
    return user;
  }
}
