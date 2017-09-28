import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-statistics',
  templateUrl: './click-statistics.component.html',
  styleUrls: ['./click-statistics.component.css','../works-statistics/works-statistics.component.css']
})
export class ClickStatisticsComponent implements OnInit {
	subscribeData={
		total_subscribe:123,
		new_subscribe:10,
		weeks_subscribe:90,
		month_subscribe:20
	}
	redList = [{
	
		pubDate:"2017-06-05",
		number:"20"
	},{
		
		pubDate:"2017-06-05",
		number:"20"
	},{
	
		pubDate:"2017-06-05",
		number:"20"
	}]
  constructor() { }

  ngOnInit() {
  }

}
