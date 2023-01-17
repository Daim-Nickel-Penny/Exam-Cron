import { IsNotEmpty, IsString } from 'class-validator';
import { Question } from 'src/interfaces/question';
export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  questionId: string;
  @IsString()
  @IsNotEmpty()
  question: string;
  @IsString()
  @IsNotEmpty()
  answer: string;
}
