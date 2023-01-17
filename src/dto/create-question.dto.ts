import { Question } from 'src/interfaces/question';

export class CreateQuestionDto {
  questionId: string;
  question: string;
  answer: string;
}
