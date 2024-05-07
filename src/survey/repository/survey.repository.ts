import { BaseRepository } from 'src/base/repository/base.repository';
import { SurveyEntity } from '../entities/survey.entity';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';


// Repositorio específico para una entidad
export class SurveyRepository extends BaseRepository<SurveyEntity> {
    constructor(@InjectEntityManager() protected readonly entityRepository: EntityManager) {
        super(SurveyEntity, entityRepository);
    }
}