import { Controller, Get, Param } from '@nestjs/common/decorators';
import { Question } from 'src/interfaces/question';
import { AnswerService } from 'src/services/answers.service';

@Controller('answers')
export class AnswersController {
  constructor(private answerService: AnswerService) {}
  @Get('byId/:id')
  async findAnswerById(@Param('id') id: string): Promise<Question> {
    return this.answerService.findById(id);
  }
}
