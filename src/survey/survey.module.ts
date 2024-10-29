import { Module, ValidationPipe } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyEntity } from './entities/survey.entity';
import { QuestionEntity } from '../question/entities/question.entity';
import { SurveyRepository } from './repository/survey.repository';
import { APP_PIPE } from '@nestjs/core';
import { ResponseEntity } from 'src/response/entities/response.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyEntity, QuestionEntity,ResponseEntity])],
  controllers: [SurveyController],
  providers: [SurveyService, SurveyRepository, {
    provide: APP_PIPE,
    useValue: new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  },],
  exports: [SurveyRepository],
})
export class SurveyModule { }
