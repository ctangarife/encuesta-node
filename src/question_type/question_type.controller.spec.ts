import { Test, TestingModule } from '@nestjs/testing';
import { QuestionTypeController } from './question_type.controller';
import { QuestionTypeService } from './question_type.service';

describe('QuestionTypeController', () => {
  let controller: QuestionTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionTypeController],
      providers: [QuestionTypeService],
    }).compile();

    controller = module.get<QuestionTypeController>(QuestionTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
