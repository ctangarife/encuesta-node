import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { QuestionEntity } from './entities/question.entity';
import { QuestionRepository } from './repository/question.repository';
import { BaseService } from 'src/base/base.service';
import { FindOneOptions, FindOptionsRelations } from 'typeorm';

@Injectable()
export class QuestionService extends BaseService<QuestionEntity> {
  constructor(private readonly questionRepository: QuestionRepository) {
    super(questionRepository);
  }

  findAllBy(
    options: FindOptionsRelations<QuestionEntity> | any,
    relations: FindOptionsRelations<QuestionEntity> = {},
  ): Promise<QuestionEntity[]> {
    const data = {
      survey: { id: options.survey }, // Filtrar por el ID de la encuesta
    };
    return this.questionRepository.findAllBy(data, relations);
  }
}
