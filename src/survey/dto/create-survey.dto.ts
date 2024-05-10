import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNotEmpty, IsString } from "class-validator";

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
    @IsNotEmpty()
    @IsBoolean()
    isActive: boolean;
    @ApiProperty()
    @IsDate()
    startDate: Date;
    @ApiProperty()
    @IsDate()
    endDate: Date;
}
