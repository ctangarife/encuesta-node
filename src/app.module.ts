import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurveyModule } from './survey/survey.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()), SurveyModule, QuestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
