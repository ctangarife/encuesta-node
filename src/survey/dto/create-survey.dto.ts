import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { TransformDate } from "src/helpers/helpers";

export class CreateSurveyDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string;
    @ApiProperty()
    @IsDate()
    @TransformDate()
    startDate: Date;
    @ApiProperty()
    @IsDate()
    @TransformDate()
    endDate: Date;
}
