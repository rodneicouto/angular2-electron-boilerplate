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

constructor(){
	var Datastore = require('nedb')
	//const {app} = require('electron')
	//console.log(app.getAppPath());

    var db = new Datastore({ filename: 'neeRodnei'});
  	db.loadDatabase(function (err: any) {    // Callback is optional
	  // Now commands will be executed
	});

	// var doc = { hello: 'world'
	//                , n: 7
	//                , today: new Date()
	//                ,system: 'solar' 
	//                , nedbIsAwesome: true
	//                , fruits: [ 'asspple', 'orange', 'pear' ]
	//                , infos: { name: 'nsedb' }
	//                };

	// db.insert(doc, function (err: any, newDoc: any) {   // Callback is optional
	//   console.log('inseriu ');
	// });

	// Finding all planets in the solar system
	db.find({ system: 'solar' }, function (err: any, docs: any) {
	  console.log(docs);
	  
	});
	
  }
}
