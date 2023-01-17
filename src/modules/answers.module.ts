import { Module } from '@nestjs/common';
import { AnswersController } from 'src/controllers/answers.controller';
import { AnswerService } from 'src/services/answers.service';
import { QuestionsService } from 'src/services/questions.service';

@Module({
  controllers: [AnswersController],
  providers: [AnswerService, QuestionsService],
})
export class AnswersModule {}
