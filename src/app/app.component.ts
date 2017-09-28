import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tabIndex=1;
  onSelect(index){
  	this.tabIndex = index;
  	console.log(index);
  }
}
