import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateQuestionDto } from 'src/dto/create-question.dto';
import { Question } from 'src/interfaces/question';
import { QuestionList } from 'src/interfaces/questionList';
import { QuestionsService } from 'src/services/questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) {}

  @Get()
  async findAll(): Promise<QuestionList> {
    return this.questionsService.findAll();
  }

  @Post()
  async create(
    @Body() createQuestionDto: CreateQuestionDto,
  ): Promise<QuestionList> {
    return this.questionsService.create(createQuestionDto);
  }
}
