import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { SurveyEntity } from './entities/survey.entity';

@ApiTags('Survey')
@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}
  @Get()
  findAll(): Promise<SurveyEntity[]> {
    return this.surveyService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string):Promise<SurveyEntity> {
    return this.surveyService.findOne(id);
  }
  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: SurveyEntity,
  })
  createSurvey(@Body() createSurveyDto: CreateSurveyDto): Promise<SurveyEntity> { 
    console.log('createSurvey',createSurveyDto)
    return this.surveyService.create(createSurveyDto);
  }

}
