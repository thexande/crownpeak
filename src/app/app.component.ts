import { Component } from '@angular/core';
import { CardsComponent } from './cards/cards.component'


@Component({
  directives: [CardsComponent],
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
  subtitle = "this is my subtitle"

}
