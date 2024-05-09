import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { QuestionEntity } from './entities/question.entity';
import { QuestionRepository } from './repository/question.repository';
import { BaseService } from 'src/base/base.service';

@Injectable()
export class QuestionService  extends BaseService<QuestionEntity> {
  constructor(private readonly questionRepository: QuestionRepository) {
    super(questionRepository);
  }
}
