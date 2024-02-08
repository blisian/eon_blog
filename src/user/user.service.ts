import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>
      ) {}

      async create(dto: UserDto): Promise<User> {
        const post = this.repository.create({
          ...dto,
          creationDate: new Date(),
        });
        await this.repository.save(post);
        return post;
      }

      async findOne(uid: number): Promise<User> {
        const user = await this.repository.findOne({ where: { uid } });
        if (!user) {
          throw new NotFoundException('User not found');
        }
        return user;
      }

      async update(uid: number, dto: UpdateUserDto): Promise<User> {
        const found = await this.findOne(uid);
        this.repository.merge(found, dto);
        await this.repository.save(found);
        return found;
      }
}
