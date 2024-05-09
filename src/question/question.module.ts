import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyEntity } from 'src/survey/entities/survey.entity';
import { QuestionEntity } from './entities/question.entity';
import { QuestionRepository } from './repository/question.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyEntity, QuestionEntity])],
  controllers: [QuestionController],
  providers: [QuestionService, QuestionRepository],
})
export class QuestionModule {}
