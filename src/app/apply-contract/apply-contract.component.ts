import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-contract',
  templateUrl: './apply-contract.component.html',
  styleUrls: ['./apply-contract.component.css']
})
export class ApplyContractComponent implements OnInit {
	tabIndex=1;
	book="";
	bookList = [
		{value:'1',name:"围城"},
		{value:'2',name:"呐喊"},
		{value:'3',name:"红高粱"},
		{value:'4',name:"无证之罪"}
	];
	number_types = [{value:'qq',display:'QQ'},{ value: 'email', display: '邮箱' },{ value: 'msn', display: 'MSN' }];
	number_type="qq";
	numberStr="";
  changeSegment(index){
  	this.tabIndex = index;
  	console.log(index);
  }
  constructor() { }

  ngOnInit() {
  }

}
