import { DeepPartial, FindOneOptions, Repository } from 'typeorm';

export class BaseRepository<T> extends Repository<T> {
    // Implement common CRUD methods here if necessary

    async createEntity(entityData: Partial<T>): Promise<T> {
        const entity = this.create(entityData as DeepPartial<T>);
        await this.save(entity);
        return entity;
    }

    async updateEntity(id: string, entityData: Partial<T>): Promise<T | null> {
        const entity = await this.findOne({ where: { id } } as unknown as FindOneOptions<T>);
        if (!entity) {
            return null;
        }
        Object.assign(entity, entityData);
        await this.save(entity);
        return entity;
    }

    async deleteEntity(id: string): Promise<boolean> {
        const result = await this.delete(id);
        return result.affected > 0;
    }
    
      async findById(id: string): Promise<T | null> {
        return this.findOne({where: { id }} as unknown as FindOneOptions<T>);
      }
    
      async findAll(): Promise<T[]> {
        return this.find();
      }
}
// Path: src/base/service/base.service.ts