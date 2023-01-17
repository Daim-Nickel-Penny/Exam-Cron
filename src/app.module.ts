import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnswersModule } from './modules/answers.module';
import { QuestionsModule } from './modules/questions.module';

@Module({
  imports: [QuestionsModule, AnswersModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
