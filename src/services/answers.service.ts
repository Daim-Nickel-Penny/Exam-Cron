import { BadRequestException, Injectable } from '@nestjs/common';
import { Question } from 'src/interfaces/question';
import { QuestionList } from 'src/interfaces/questionList';
import { QuestionsService } from './questions.service';

@Injectable()
export class AnswerService {
  constructor(private questionsService: QuestionsService) {}

  async findById(id: string): Promise<Question> {
    let questionData: QuestionList = await this.questionsService.findAll();
    let questionById: Question | undefined;

    questionData.questions.forEach((ques) => {
      if (ques.questionId === id) {
        questionById = ques;
      }
    });
    let badrequest: string = `${id} NOT PRESENT`;
    if (questionById === undefined) {
      throw new BadRequestException(badrequest);
    } else return questionById;
  }

async AddAnswerToQues(question:Question): Promise<QuestionList> {
    

  let questionData: QuestionList = await this.questionsService.findAll();
    
  questionData.questions.forEach((ques)=>{
    if(ques.questionId === question.questionId){
      ques.answer =question.answer
    }
  })
    

    return questionData;
  }
}
