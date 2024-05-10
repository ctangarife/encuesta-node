import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResponseService } from './response.service';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';
import { ApiTags } from '@nestjs/swagger';

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

}
