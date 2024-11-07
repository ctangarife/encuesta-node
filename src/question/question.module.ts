import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyEntity } from 'src/survey/entities/survey.entity';
import { QuestionEntity } from './entities/question.entity';
import { QuestionRepository } from './repository/question.repository';
import { ResponseEntity } from 'src/response/entities/response.entity';
import { QuestionTypeEntity } from 'src/question_type/entities/question_type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SurveyEntity,
      QuestionEntity,
      ResponseEntity,
      QuestionTypeEntity,
    ]),
  ],
  controllers: [QuestionController],
  providers: [QuestionService, QuestionRepository],
  exports: [QuestionRepository],
})
export class QuestionModule {}
