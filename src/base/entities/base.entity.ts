import { Column, PrimaryGeneratedColumn } from 'typeorm'; // Import the necessary package

export abstract class Base {
    @PrimaryGeneratedColumn('uuid') 
    id: string;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at'})  
    createdAt: Date;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at'})
    updatedAt: Date;
    @Column({ type: 'timestamp', nullable: true, name: 'deleted_at'})
    deletedAt: Date;
    @Column({ type: 'boolean', default: false, name: 'deleted'})
    isDeleted: boolean;
    @Column({ type: 'varchar', length: 30, nullable: true, name: 'created_by'}) 
    createdBy: string;
    @Column({ type: 'varchar', length: 30, nullable: true, name: 'updated_by' })
    updatedBy: string;
    @Column({ type: 'varchar', length: 30, nullable: true, name: 'deleted_by'})
    deletedBy: string;
}
