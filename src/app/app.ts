import {Component} from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  directives: [AlertComponent],
  templateUrl: 'app.template.html'
})
export class AppComponent{
  private hello_world: string = "Hello Angular 2";
}
