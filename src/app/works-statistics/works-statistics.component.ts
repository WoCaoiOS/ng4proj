import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-statistics',
  templateUrl: './works-statistics.component.html',
  styleUrls: ['./works-statistics.component.css']
})
export class WorksStatisticsComponent implements OnInit {
	subscribeData={
		total_subscribe:123,
		new_subscribe:10,
		weeks_subscribe:90,
		month_subscribe:20
	}
	subscribeList = [{
		chapter:"第十二章 奇偶去",
		pubDate:"2017-06-05 12:30:20",
		number:"20",
		kMoney:"125"
	},{
		chapter:"第十三章 奇偶去",
		pubDate:"2017-06-05 12:30:20",
		number:"20",
		kMoney:"125"
	},{
		chapter:"第十四章 奇偶去",
		pubDate:"2017-06-05 12:30:20",
		number:"20",
		kMoney:"125"
	}]
  constructor() { }

  ngOnInit() {
  }

}
