import {Component} from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

declare var database:any;

@Component({
  moduleId: module.id,
  selector: 'my-app',
  directives: [AlertComponent],
  templateUrl: 'app.template.html'
})
export class AppComponent{
  private hello_world: string = "Hello Angular 2";

constructor(){

	  database.find({ system: 'solar' }, function (err: any, docs: any) {
	    console.log('fiz');
	    console.log(docs);	    
	  });
	
  }
}
