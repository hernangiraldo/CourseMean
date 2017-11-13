import {Question} from '../question/question.model';

export class Answer {
  description: string;
  question: Question;
  createdAt?: Date;
  user?: User;

  constructor ( _description: string, _question: Question, _createdAt?: Date, _user?: User ) {
    this.description = _description;
    this.question = _question;
    this.createdAt = _createdAt;
    this.user = _user;
  }
}

export class User {
  firstName: string;
  lastName: string;

  constructor ( _fisrtName: string, _lastName: string ) {
    this.firstName = _fisrtName;
    this.lastName = _lastName;
  }
}
