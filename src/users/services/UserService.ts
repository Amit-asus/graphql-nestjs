import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/graphlql/models/User';
import { CreateUserInput } from 'src/graphlql/utils/CreateUserInput';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.userRepository.find({ relations: ['setting'] });
  }

  getUserById(id: number) {
    return this.userRepository.findOne({
      where: { id },
      relations: ['setting'], // putting the relation is more important
    });
  }

  createUser(createUserData: CreateUserInput) {
    const newUser = this.userRepository.create(createUserData);
    return this.userRepository.save(newUser);
  }
}
