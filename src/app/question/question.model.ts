import {Answer} from '../answer/answer.model';

export class Question {
  title: string;
  description: string;
  createdAt?: Date;
  icon?: string;
  answers: Answer[];

  constructor ( _title: string, _description: string, _createdAt?: Date, _icon?: string ) {
    this.title = _title;
    this.description =  _description;
    this.createdAt = _createdAt;
    this.icon = _icon;
    this.answers = [];
  }
}
