import {Component, View, bootstrap} from 'angular2/angular2';
@Component({
  selector: 'my-app'
})
@View({
  template: '<h1>My First Angular 2 App</h1><display></display>'
})
class AppComponent { 
	constructor() {
		console.log("aids");
	}
}
bootstrap(AppComponent);