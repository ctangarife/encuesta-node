import { Base } from '../../base/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { QuestionEntity } from '../../question/entities/question.entity';

@Entity('question_type', { schema: 'administrator' })
export class QuestionTypeEntity extends Base {
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

   @OneToMany(() => QuestionEntity, question => question.questionType)
  questions: QuestionEntity[];

  constructor(partial: Partial<QuestionTypeEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}
