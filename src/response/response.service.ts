import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { ResponseEntity } from './entities/response.entity';
import { ResponseRepository } from './repository/response.repository';
import { QuestionRepository } from 'src/question/repository/question.repository';
import { SurveyRepository } from 'src/survey/repository/survey.repository';
import { UserRepository } from 'src/users/repository/user.repository';
import { CreateResponseDto } from './dto/create-response.dto';
import { UserEntity } from 'src/users/entities/user.entity';

@Injectable()
export class ResponseService extends BaseService<ResponseEntity> {
  constructor(
    private readonly responseRepository: ResponseRepository,
    private readonly questionRepository: QuestionRepository,
    private readonly surveyRepository: SurveyRepository,
    private readonly userRepository: UserRepository,
  ) {
    super(responseRepository);
  }

  async createResponse(
    createResponseDto: CreateResponseDto,
  ): Promise<ResponseEntity[]> {
    const { surveyId, userId, responses } = createResponseDto;

    const survey = await this.surveyRepository.findOneBy({ id: surveyId });

    if (!survey) {
      throw new Error('Survey not found');
    }

    let user = await this.userRepository.findOneBy({ email: userId });
    if (!user) {
      user = new UserEntity({ email: userId });
      user = await this.userRepository.upsert({ email: userId }, user);
    }

    const responseEntities: ResponseEntity[] = [];

    for (const [questionId, responseData] of Object.entries(responses)) {
      const question = await this.questionRepository.findOneBy({
        id: questionId,
      });

      if (!question) {
        throw new Error(`Question ${questionId} not found`);
      }

      // Extraer respuesta y justificación
      const { answer, justification } = responseData;

      const newResponse = new ResponseEntity({
        question,
        survey,
        user,
        response: answer, // Almacena la respuesta
        justification, // Almacena la justificación
      });

      const savedResponse = await this.responseRepository.upsert(
        { question: { id: questionId }, user: { id: user.id } },
        newResponse,
      );

      responseEntities.push(savedResponse);
    }

    return responseEntities;
  }

  async getResponsesForQuestion(questionId: string): Promise<ResponseEntity[]> {
    return this.responseRepository.findAllBy({ question: { id: questionId } });
  }
}
