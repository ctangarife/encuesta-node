import { Base } from "src/base/entities/base.entity";
import { QuestionEntity } from "src/question/entities/question.entity";
import { SurveyEntity } from "src/survey/entities/survey.entity";
import { UserEntity } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity('response', { schema: 'public' })
export class ResponseEntity extends Base {

    @ManyToOne(() => UserEntity, user => user.name, { eager: false })
    @JoinColumn({ name: 'id_user', referencedColumnName: 'id' })
    user: UserEntity;

    @ManyToOne(() => SurveyEntity, survey => survey.name, { eager: false })
    @JoinColumn({ name: 'id_survey', referencedColumnName: 'id' })
    survey: SurveyEntity;

    @ManyToOne(() => QuestionEntity, question => question.question, { eager: false })
    @JoinColumn({ name: 'id_question', referencedColumnName: 'id' })
    question: QuestionEntity;

    @Column({ type: 'varchar', length: 255, nullable: true, name: 'response' })
    response: string;

    @Column({type: 'varchar', length: 255, nullable: true, name: 'justification'})
    justification: string;

    @Column({ type: 'boolean', default: true, name: 'valid'})
    valid: boolean; 

    constructor(partial: Partial<ResponseEntity>) {
        super(partial);
        Object.assign(this, partial);
    }
}
