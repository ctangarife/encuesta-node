// src/device/entities/device-info.entity.ts
import { Base } from '../../base/entities/base.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity } from '../../users/entities/user.entity';

@Entity('device_info', { schema: 'public' })
export class DeviceInfoEntity extends Base {
  @Column({ type: 'text', name: 'user_agent' })
  userAgent: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  platform: string;

  @Column({ type: 'int', nullable: true, name: 'screen_width' })
  screenWidth: number;

  @Column({ type: 'int', nullable: true, name: 'screen_height' })
  screenHeight: number;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    name: 'connection_type',
  })
  connectionType: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    name: 'effective_type',
  })
  effectiveType: string;

  @Column({ type: 'boolean', name: 'prefers_dark_mode', default: false })
  prefersDarkMode: boolean;

  // Relación con la entidad de usuario
  @ManyToOne(() => UserEntity, (user) => user.deviceInfo, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: UserEntity;
}
