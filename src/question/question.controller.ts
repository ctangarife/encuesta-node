import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { QuestionEntity } from './entities/question.entity';
import { QuestionSurveyDto } from './dto/questions.dto';

@ApiTags('Questions')
@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}


  @Get()
  findAll(): Promise<QuestionEntity[]> {
    return this.questionService.findAll();
  }

  @Get(':survey')
  findOne(@Param() questionDto: QuestionSurveyDto): Promise<QuestionEntity[]> {
    return this.questionService.findAllBy({survey:questionDto.survey});
  }

}
