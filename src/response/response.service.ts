import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { ResponseEntity } from './entities/response.entity';
import { ResponseRepository } from './repository/response.repository';

@Injectable()
export class ResponseService  extends BaseService<ResponseEntity> {
  constructor(private readonly responseRepository: ResponseRepository) {
    super(responseRepository);
  }
}
