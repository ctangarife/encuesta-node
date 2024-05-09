import { Base } from "../../base/entities/base.entity";
import { QuestionEntity } from "../../question/entities/question.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity('survey', { schema: 'administrator' })
export class SurveyEntity extends Base {
    @Column({ type: 'varchar', length: 100, nullable: false })
    name: string;
    @Column({ type: 'varchar', length: 255, nullable: true })
    description: string;
    @Column({ type: 'boolean', default: true })
    isActive: boolean;
    @Column({ type: 'timestamp', nullable: true, name: 'start_date' })
    startDate: Date;
    @Column({ type: 'timestamp', nullable: true, name: 'end_date' })
    endDate: Date;
    @OneToMany(type => QuestionEntity, question => question.survey, { eager: true })
    questions: QuestionEntity[];

    constructor(partial: Partial<SurveyEntity>) {
        super(partial);
        Object.assign(this, partial);
    }
}
