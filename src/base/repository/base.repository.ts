import { DeepPartial, FindOneOptions, Repository, Entity, ObjectType, EntityManager, FindManyOptions, FindOptionsRelations } from 'typeorm';

export abstract class BaseRepository<T> {
  constructor(
    private readonly entityClass: ObjectType<T>,
    protected readonly entityRepository: EntityManager
  ) {

  }
  async createEntity(entityData: T): Promise<T> {
    const entity = this.entityRepository.create(this.entityClass, entityData);
    await this.entityRepository.save(entity);
    return entity;
  }

  async updateEntity(id: string, entityData: T): Promise<T | null> {
    const entity = await this.entityRepository.findOne(this.entityClass, { where: { id } } as unknown as FindOneOptions<T>);
    if (!entity) {
      return null;
    }
    Object.assign(entity, entityData);
    await this.entityRepository.save(entity);
    return entity;
  }

  async deleteEntity(id: string): Promise<boolean> {
    const result = await this.entityRepository.delete(this.entityClass, id);
    return result.affected > 0;
  }

  async findById(id: string): Promise<T | null> {
    return this.entityRepository.findOne(this.entityClass, { where: { id } } as unknown as FindOneOptions<T>);
  }

  async findAll(): Promise<T[]> {
    const query: FindManyOptions = {
      where: {
        deleted: false,
      },
    };
    return this.entityRepository.find(this.entityClass, query);
  }
  async findAllBy(options: FindOneOptions | any = {}, relations: FindOptionsRelations<T>): Promise<T[]> {
    const query: FindManyOptions = {
      where: {
        deleted: false,
        ...options,
      },
    };
    if (relations && Object.keys(relations).length > 0) {
      query.relations = relations;
    }
    return this.entityRepository.find(this.entityClass, query);
  }
  async findOneBy(options: FindOneOptions | any = {}): Promise<T | null> {
    return this.entityRepository.findOne(this.entityClass, {
      where: {
        deleted: false,
        ...options,
      },
    });
  }

  async upsert(options: FindOneOptions, entityData: T): Promise<T> {
    const entity = await this.findOneBy(options);
    if (!entity) {
      return this.createEntity(entityData);
    }
    return this.updateEntity(entity['id'], entityData);
  }
}