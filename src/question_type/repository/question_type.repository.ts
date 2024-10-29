import { BaseRepository } from 'src/base/repository/base.repository';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { QuestionTypeEntity } from '../entities/question_type.entity';


// Repositorio específico para una entidad
export class QuestionTypeRepository extends BaseRepository<QuestionTypeEntity> {
    constructor(@InjectEntityManager() protected readonly entityRepository: EntityManager) {
        super(QuestionTypeEntity, entityRepository);
    }
}