import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-income',
  templateUrl: './query-income.component.html',
  styleUrls: ['./query-income.component.css']
})
export class QueryIncomeComponent implements OnInit {
	years = [{ value: '2017', display: '2017' },
			 { value: '2016', display: '2016' },
			 { value: '2016', display: '2015' },
			 { value: '2016', display: '2014' },
			 { value: '2016', display: '2013' },
			 { value: '2016', display: '2012' }];
	months = [{ value: '12', display: '12' },
			 { value: '11', display: '11' },
			 { value: '10', display: '10' },
			 { value: '9', display: '9' },
			 { value: '8', display: '8' },
			 { value: '7', display: '7' }];
	info={
		year:"2016",
		month:"8"
	};
	royalties={
		total:1234,
		settled:123
	}
	tabIndex=1;
  changeSegment(index){
  	this.tabIndex = index;
  	console.log(index);
  }
  constructor() { }

  ngOnInit() {
  }

}
