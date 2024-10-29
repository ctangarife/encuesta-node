import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class QuestionSurveyDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    survey: string;
}
