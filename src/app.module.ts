import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfessorModule } from './professor/professor.module';
import { AdministrationModule } from './administration/administration.module';
import { ProfController } from './professor/professor.controller';

@Module({
  imports: [ProfessorModule, MulterModule.register({}), AdministrationModule],
  controllers: [AppController,ProfController],
  providers: [AppService],
})
export class AppModule {}
