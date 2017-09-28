import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-grounding',
  templateUrl: './apply-grounding.component.html',
  styleUrls: ['./apply-grounding.component.css',"../apply-contract/apply-contract.component.css"]
})
export class ApplyGroundingComponent implements OnInit {
	tabIndex=1;
	book="";
	bookList = [
		{value:'1',name:"围城"},
		{value:'2',name:"呐喊"},
		{value:'3',name:"红高粱"},
		{value:'4',name:"无证之罪"}
	];
	changeSegment(index){
  	this.tabIndex = index;
  	console.log(index);
  }
  constructor() { }

  ngOnInit() {
  }

}
