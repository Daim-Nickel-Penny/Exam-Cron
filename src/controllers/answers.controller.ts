import { Body, Controller, Get, Param, Post } from '@nestjs/common/decorators';
import { CreateQuestionDto } from 'src/dto/create-question.dto';
import { Question } from 'src/interfaces/question';
import { QuestionList } from 'src/interfaces/questionList';
import { AnswerService } from 'src/services/answers.service';

@Controller('answers')
export class AnswersController {
  constructor(private answerService: AnswerService) {}

  @Get('byId/:id')
  async findAnswerById(@Param('id') id: string): Promise<Question> {
    return this.answerService.findById(id);
  }

  @Post()
  async AddAnswerToQues(@Body() createQuestionDto:CreateQuestionDto):Promise<QuestionList>{
      
    return this.answerService.AddAnswerToQues(createQuestionDto)
  }
}
