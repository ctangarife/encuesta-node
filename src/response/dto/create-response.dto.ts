import { IsString, IsNotEmpty, IsUUID, IsObject } from 'class-validator';

export class CreateResponseDto {
  @IsUUID()
  surveyId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsObject()
  responses: {
    [questionId: string]: {
      answer: any;
      justification?: string;
    };
  };
}
