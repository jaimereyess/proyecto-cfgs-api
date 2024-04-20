import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto)
  }

  findAllUsers() {
    return this.userRepository.find()
  }

  async findOneUser(id: string) {
    return this.userRepository.findOne({ where: { user_id: id } })
  }

  async updateUser(id: string, updateUserDto: CreateUserDto) {
    await this.userRepository.update(id, updateUserDto)
    return this.findOneUser(id)
  }

  removeUser(id: string) {
    return this.userRepository.delete(id)
  }
}
