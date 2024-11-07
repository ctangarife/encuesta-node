import { Module, forwardRef } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { UserEntity } from 'src/users/entities/user.entity';
import { DeviceInfoEntity } from './entities/device-info.entity';
import { DeviceInfoRepository } from './repository/device.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, DeviceInfoEntity]),
    forwardRef(() => UsersModule),
  ],
  controllers: [DevicesController],
  providers: [DevicesService, DeviceInfoRepository],
  exports: [DevicesService, DeviceInfoRepository],
})
export class DevicesModule {}
