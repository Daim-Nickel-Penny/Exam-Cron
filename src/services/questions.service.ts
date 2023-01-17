import { Injectable } from '@nestjs/common';
import { QuestionList } from 'src/interfaces/questionList';
import { Question } from 'src/interfaces/question';
@Injectable()
export class QuestionsService {
  private readonly questionList: QuestionList = { questions: [] };
  private readonly questionArr: Array<Question> = [];
  create(question: Question): QuestionList {
    this.questionList.questions.push(question);
    return this.questionList;
  }

  findAll(): QuestionList {
    this.questionList.questions.push({
      questionId: '1',
      question: 'hfdf',
      answer: 'jjjjj',
    });
    return this.questionList;
  }
}
