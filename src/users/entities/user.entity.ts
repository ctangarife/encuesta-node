import { Base } from 'src/base/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { TypeIdentification, Gender } from '../enum/users.enum';
import { ResponseEntity } from 'src/response/entities/response.entity';
import { DeviceInfoEntity } from '../../devices/entities/device-info.entity';

@Entity('user', { schema: 'public' })
export class UserEntity extends Base {
  @Column({ type: 'varchar', length: 100, nullable: true, name: 'name' })
  name: string;
  @Column({ type: 'varchar', length: 100, nullable: true, name: 'last_name' })
  lastName: string;
  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
    name: 'email',
    unique: true,
  })
  email: string;
  @Column({
    type: 'enum',
    enum: TypeIdentification,
    default: TypeIdentification.CC,
    name: 'type_identification',
  })
  typeIdentification: TypeIdentification;
  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
    name: 'identification',
    unique: true,
  })
  identification: string;
  @Column({
    type: 'date',
    nullable: false,
    name: 'birth_date',
  })
  birthDate: Date;
  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
    name: 'student_code',
    unique: true,
  })
  studentCode: string;
  @Column({
    type: 'enum',
    enum: Gender,
    default: Gender.Other,
    name: 'gender',
  })
  gender: Gender;

  //Relations
  @OneToMany((type) => ResponseEntity, (response) => response.response, {
    eager: false,
  })
  response: ResponseEntity[];

  @OneToMany(() => DeviceInfoEntity, (deviceInfo) => deviceInfo.user)
  deviceInfo: DeviceInfoEntity[];

  constructor(partial: Partial<UserEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}
