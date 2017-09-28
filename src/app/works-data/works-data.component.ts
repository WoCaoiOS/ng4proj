import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-data',
  templateUrl: './works-data.component.html',
  styleUrls: ['./works-data.component.css']
})
export class WorksDataComponent implements OnInit {
	bookList=[
		{ID:"123",name:"锁春秋"},
		{ID:"124",name:"锁春秋2"},
		{ID:"125",name:"锁春秋3"},
		{ID:"126",name:"锁春秋4"}
	];
	bookID = "123";
	tabIndex=1;
  changeSegment(index){
  	this.tabIndex = index;
  	console.log(index);
  }
  constructor() { }

  ngOnInit() {
  }

}
