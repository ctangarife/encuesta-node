import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

config(); // Load environment variables from .env file
const typeOrmConfig: TypeOrmModuleOptions ={
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5436,
    username:  process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || '1nt3r4ct1v3',
    database: process.env.POSTGRES_DATABASE || 'encuesta',
    entities: ['**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: false,
    logging: true,
};

export default typeOrmConfig;

