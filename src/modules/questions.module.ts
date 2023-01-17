import { Module } from '@nestjs/common';
import { QuestionsController } from 'src/controllers/questions.controller';
import { QuestionsService } from 'src/services/questions.service';

@Module({
  controllers: [QuestionsController],
  providers: [QuestionsService],
  exports: [QuestionsService],
})
export class QuestionsModule {}
