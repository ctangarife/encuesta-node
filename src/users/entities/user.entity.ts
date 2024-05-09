import { Base } from "src/base/entities/base.entity";
import { Column, Entity, OneToMany } from "typeorm";
import TypeIdentification from "../enum/users.enum";
import { ResponseEntity } from "src/response/entities/response.entity";

@Entity('user', { schema: 'public' })
export class UserEntity extends Base {
    @Column({ type: 'varchar', length: 100, nullable: false, name: "name" })
    name: string;
    @Column({ type: 'varchar', length: 100, nullable: false, name: "last_name" })
    lastName: string;
    @Column({ type: 'varchar', length: 100, nullable: false, name: "email" })
    email: string;
    @Column({ type: 'enum', enum: TypeIdentification, default: TypeIdentification.CC, name: "type_identification" })
    typeIdentification: TypeIdentification;
    @Column({ type: 'varchar', length: 20, nullable: false, name: "identification" })
    identification: string;
    @Column({ type: 'varchar', length: 100, nullable: false, name: "student_code" })
    studentCode: string;

    //Relations
    @OneToMany(type => ResponseEntity, response => response.response, { eager: true })
    response: ResponseEntity[];

    constructor(partial: Partial<UserEntity>) { 
        super(partial);
        Object.assign(this, partial);
    }
    
}
