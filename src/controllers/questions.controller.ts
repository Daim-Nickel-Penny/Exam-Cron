import {
  Body,
  Controller,
  Get,
  Post,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
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
    const errors = await validate(createQuestionDto);
    if (errors.length > 0) {
      throw new BadRequestException('Validation Failed');
    }
    return this.questionsService.create(createQuestionDto);
  }
}
