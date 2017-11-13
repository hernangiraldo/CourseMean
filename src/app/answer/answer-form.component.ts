import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer, User } from './answer.model';
import { Question } from '../question/question.model';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: [ './answer-form.component.css' ]
})
export class AnswerFormComponent {
  @Input() question: Question;
  @Input() test: string;

  onSubmit ( form: NgForm ) {
    const ANSWER = new Answer(
      form.value.description,
      this.question,
      new Date(),
      new User( 'Usuario', 'Prueba' )
    );

    this.question.answers.unshift( ANSWER );
    form.reset();
  }
}
