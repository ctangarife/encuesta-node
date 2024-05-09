import { Module, Res } from '@nestjs/common';
import { ResponseService } from './response.service';
import { ResponseController } from './response.controller';
import { UserEntity } from 'src/users/entities/user.entity';
import { SurveyEntity } from 'src/survey/entities/survey.entity';
import { QuestionEntity } from 'src/question/entities/question.entity';
import { ResponseEntity } from './entities/response.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseRepository } from './repository/response.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyEntity, QuestionEntity, UserEntity,ResponseEntity])],
  controllers: [ResponseController],
  providers: [ResponseService,ResponseRepository],
})
export class ResponseModule {}
