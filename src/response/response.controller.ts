import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ResponseService } from './response.service';
import { CreateResponseDto } from './dto/create-response.dto';
import { ApiTags } from '@nestjs/swagger';
import { ResponseEntity } from './entities/response.entity';

@ApiTags('Response')
@Controller('response')
export class ResponseController {
  constructor(private readonly responseService: ResponseService) {}

  @Get()
  findAll() {
    return this.responseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.responseService.findOne(id);
  }

  @Post()
  async createResponse(
    @Body() createResponseDto: CreateResponseDto,
  ): Promise<ResponseEntity[]> {
    return this.responseService.createResponse(createResponseDto);
  }

  @Get('question/:questionId')
  async getResponsesForQuestion(
    @Param('questionId') questionId: string,
  ): Promise<ResponseEntity[]> {
    return this.responseService.getResponsesForQuestion(questionId);
  }
}
