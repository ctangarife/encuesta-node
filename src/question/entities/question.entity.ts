import { Base } from "../../base/entities/base.entity";
import TypeQuestion from "../enum/type-question.enum";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { SurveyEntity } from "../../survey/entities/survey.entity";
import { ResponseEntity } from "src/response/entities/response.entity";

@Entity('question', { schema: 'administrator' })
export class QuestionEntity extends Base {
    @Column({ type: 'varchar', length: 200, nullable: false })  
    question: string;
    @Column({ type: 'enum', enum: TypeQuestion, default: TypeQuestion.Single })
    type: TypeQuestion;
    @Column({ type: 'boolean', default: true, name: 'active'})
    isActive: boolean;
    @Column({ type: 'boolean', default: false, name: 'is_required'})
    isRequired: boolean;
    @Column({ type: 'int', nullable: true })
    order: number;
    //Relations
    @ManyToOne((type) => SurveyEntity, (survey) => survey.name, { eager: false })
    @JoinColumn({ name: 'id_survey', referencedColumnName: 'id' })
    survey: SurveyEntity;
    @OneToMany(type => ResponseEntity, response => response.response, { eager: true })
    response: ResponseEntity[];

    constructor(partial: Partial<QuestionEntity>) { 
        super(partial);
        Object.assign(this, partial);
    }
}
