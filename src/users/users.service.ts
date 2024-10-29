import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repository/user.repository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService extends BaseService<UserEntity> {
  constructor(private readonly userRepository: UserRepository) {
    super(userRepository);
  }

  async create(createUserDto: CreateUserDto) {
    const {
      email,
      name,
      lastName,
      identification,
      typeIdentification,
      gender,
      birthDate,
    } = createUserDto;
    const newUser = new UserEntity({
      email,
      name,
      lastName,
      identification,
      typeIdentification,
      gender,
      birthDate,
    });
    return this.userRepository.upsert({ email: createUserDto.email }, newUser);
  }
}
