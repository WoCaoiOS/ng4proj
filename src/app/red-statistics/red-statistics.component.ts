import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red-statistics',
  templateUrl: './red-statistics.component.html',
  styleUrls: ['./red-statistics.component.css','../works-statistics/works-statistics.component.css']
})
export class RedStatisticsComponent implements OnInit {
	subscribeData={
		total_subscribe:123,
		new_subscribe:10,
		weeks_subscribe:90,
		month_subscribe:20
	}
	redList = [{
	
		pubDate:"2017-06-05 12:30:20",
		number:"20",
		kMoney:"125"
	},{
		
		pubDate:"2017-06-05 12:30:20",
		number:"20",
		kMoney:"125"
	},{
	
		pubDate:"2017-06-05 12:30:20",
		number:"20",
		kMoney:"125"
	}]
  constructor() { }

  ngOnInit() {
  }

}
