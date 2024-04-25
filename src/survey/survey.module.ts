import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyEntity } from './entities/survey.entity';
import { QuestionEntity } from '../question/entities/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyEntity, QuestionEntity])],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule {}
