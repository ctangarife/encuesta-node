import { Injectable } from '@nestjs/common';
import { Base } from './entities/base.entity';
import { BaseRepository } from './repository/base.repository';
import { DeepPartial, FindOneOptions } from 'typeorm';

@Injectable()
export class BaseService<T extends Base> {
  constructor(private readonly baseRepository: BaseRepository<T>) { }
  findAll(): Promise<T[]> {
    return this.baseRepository.findAll();
  }

  findOne(id: string): Promise<T> {
    return this.baseRepository.findById(id);
  }

  findOneBy(options: FindOneOptions | any): Promise<T> {
    return this.baseRepository.findOneBy(options);
  }
}
