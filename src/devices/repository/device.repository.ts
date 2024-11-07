import { BaseRepository } from 'src/base/repository/base.repository';
import { DeviceInfoEntity } from '../entities/device-info.entity';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

// Repositorio específico para una entidad
export class DeviceInfoRepository extends BaseRepository<DeviceInfoEntity> {
  constructor(
    @InjectEntityManager() protected readonly entityRepository: EntityManager,
  ) {
    super(DeviceInfoEntity, entityRepository);
  }
}
