import { Injectable } from '@nestjs/common';
import { SurveyRepository } from './repository/survey.repository';
import { BaseService } from 'src/base/base.service';
import { SurveyEntity } from './entities/survey.entity';

@Injectable()
export class SurveyService extends BaseService<SurveyEntity> {
  constructor(private readonly surveyRepository: SurveyRepository) {
    super(surveyRepository);
  }
}
