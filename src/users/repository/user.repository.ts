import { BaseRepository } from 'src/base/repository/base.repository';
import { UserEntity } from '../entities/user.entity';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';


// Repositorio específico para una entidad
export class UserRepository extends BaseRepository<UserEntity> {
    constructor(@InjectEntityManager() protected readonly entityRepository: EntityManager) {
        super(UserEntity, entityRepository);
    }
}