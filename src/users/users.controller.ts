import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './users.service';
import { FormRegisterData } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { DevicesService } from 'src/devices/devices.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UserService,
    private readonly deviceInfoService: DevicesService,
  ) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post('register')
  async register(@Body() createUserDto: FormRegisterData) {
    const user = await this.usersService.create(createUserDto.formData);
    await this.deviceInfoService.createDeviceInfo(
      user.id,
      createUserDto.deviceInfo,
    );
    return user;
  }

  @Get('email/:email')
  findOneByEmail(@Param('email') email: string) {
    return this.usersService.findOneBy({ email });
  }
}
