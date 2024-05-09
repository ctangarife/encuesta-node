import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService  extends BaseService<UserEntity> {
  constructor(private readonly userRepository: UserRepository) {
    super(userRepository);
  }
}
