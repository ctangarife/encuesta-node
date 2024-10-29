import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurveyModule } from './survey/survey.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { QuestionModule } from './question/question.module';
import { UsersModule } from './users/users.module';
import { ResponseModule } from './response/response.module';
import { QuestionTypeModule } from './question_type/question_type.module';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()), SurveyModule, QuestionModule, UsersModule, ResponseModule, QuestionTypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
