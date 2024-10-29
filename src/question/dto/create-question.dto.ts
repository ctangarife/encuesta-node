import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsString, IsUUID } from "class-validator";
import TypeQuestion from "../enum/type-question.enum";


export class CreateQuestionDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    question: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(TypeQuestion) // Add the missing argument
    type: TypeQuestion;
    @ApiProperty()
    @IsUUID()
    survey: string;
}
