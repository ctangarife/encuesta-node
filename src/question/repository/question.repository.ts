import { BaseRepository } from 'src/base/repository/base.repository';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { QuestionEntity } from '../entities/question.entity';


// Repositorio específico para una entidad
export class QuestionRepository extends BaseRepository<QuestionEntity> {
    constructor(@InjectEntityManager() protected readonly entityRepository: EntityManager) {
        super(QuestionEntity, entityRepository);
    }
}