import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { DeviceInfoEntity } from './entities/device-info.entity';
import { UserRepository } from 'src/users/repository/user.repository';
import { DeviceInfoRepository } from './repository/device.repository';

@Injectable()
export class DevicesService extends BaseService<DeviceInfoEntity> {
  constructor(
    private readonly deviceRepository: DeviceInfoRepository,
    private readonly userRepository: UserRepository,
  ) {
    super(deviceRepository);
  }

  async createDeviceInfo(
    idUser: string,
    deviceData: Partial<DeviceInfoEntity>,
  ): Promise<void> {
    const user = await this.userRepository.findOneBy({ id: idUser });
    const newDeviceInfo = new DeviceInfoEntity();
    Object.assign(newDeviceInfo, deviceData);

    // Asignar la relación con el usuario
    newDeviceInfo.user = user;
    await this.deviceRepository.upsert(
      { user: { id: user.id } },
      newDeviceInfo,
    );
  }
}
