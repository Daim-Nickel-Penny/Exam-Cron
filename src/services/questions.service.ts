import { Injectable } from '@nestjs/common';
import { QuestionList } from 'src/interfaces/questionList';
import { Question } from 'src/interfaces/question';
@Injectable()
export class QuestionsService {
  private readonly questionList: QuestionList = { questions: [] };
  private readonly questionArr: Array<Question> = [];
  create(question: Question): Question[] {
    // this.questionList.questions.push(question);
    this.questionArr.push(question);
    return this.questionArr;
  }

  findAll(): QuestionList {
    return this.questionList;
  }
}
