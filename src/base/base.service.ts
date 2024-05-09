import { Injectable } from '@nestjs/common';
import { Base } from './entities/base.entity';
import { BaseRepository } from './repository/base.repository';

@Injectable()
export class BaseService <T extends Base> {
  constructor(private readonly baseRepository: BaseRepository<T>) {}
  findAll(): Promise<T[]>{
    return this.baseRepository.findAll();
  }

  findOne(id: string): Promise<T> {
    return this.baseRepository.findById(id);
  }
}
