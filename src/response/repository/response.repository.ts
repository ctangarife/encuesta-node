import { BaseRepository } from 'src/base/repository/base.repository';
import { ResponseEntity } from '../entities/response.entity';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';


// Repositorio específico para una entidad
export class ResponseRepository extends BaseRepository<ResponseEntity> {
    constructor(@InjectEntityManager() protected readonly entityRepository: EntityManager) {
        super(ResponseEntity, entityRepository);
    }
}