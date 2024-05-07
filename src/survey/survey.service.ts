import { Injectable } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { SurveyRepository } from './repository/survey.repository';

@Injectable()
export class SurveyService {
  constructor(private readonly surveyRepository: SurveyRepository) {}
  create(createSurveyDto: CreateSurveyDto) {
    return 'This action adds a new survey';
  }

  findAll() {
    console.log("Entra acá")
    return this.surveyRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} survey`;
  }

  update(id: number, updateSurveyDto: UpdateSurveyDto) {
    return `This action updates a #${id} survey`;
  }

  remove(id: number) {
    return `This action removes a #${id} survey`;
  }
}
