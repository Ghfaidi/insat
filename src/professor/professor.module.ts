import { Module } from '@nestjs/common';
import { ProfController } from './professor.controller';

@Module({
    controllers: [ProfController]
})
export class ProfessorModule {}
