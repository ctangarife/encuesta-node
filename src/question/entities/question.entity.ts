import { Base } from '../../base/entities/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { SurveyEntity } from '../../survey/entities/survey.entity';
import { ResponseEntity } from 'src/response/entities/response.entity';
import { QuestionTypeEntity } from 'src/question_type/entities/question_type.entity';

@Entity('question', { schema: 'administrator' })
export class QuestionEntity extends Base {
  @Column({ type: 'varchar', length: 200, nullable: false })
  question: string;

  @Column({ type: 'boolean', default: true, name: 'active' })
  isActive: boolean;

  @Column({ type: 'boolean', default: false, name: 'is_required' })
  isRequired: boolean;

  @Column({ type: 'int', nullable: true })
  order: number;

  // Relaciones
  @ManyToOne(() => SurveyEntity, (survey) => survey.questions)
  @JoinColumn({ name: 'id_survey', referencedColumnName: 'id' })
  survey: SurveyEntity;

  @OneToMany(() => ResponseEntity, (response) => response.question)
  responses: ResponseEntity[];

  @ManyToOne(
    () => QuestionTypeEntity,
    (questionType) => questionType.questions,
    { eager: true },
  )
  @JoinColumn({ name: 'id_question_type', referencedColumnName: 'id' })
  questionType: QuestionTypeEntity;

  constructor(partial: Partial<QuestionEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}
