import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-statistics',
  templateUrl: './sale-statistics.component.html',
  styleUrls: ['./sale-statistics.component.css']
})
export class SaleStatisticsComponent implements OnInit {
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
	}
	chartOption = {
    title: {
      text: ""
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['围城', '平凡岁月', '你我他', '好的人生', 'java从入门到放弃']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['第一周', '第二周', '第三周', '第四周']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '围城',
        type: 'line',
        stack: '总量',
        // areaStyle: { normal: {} },
        data: [120, 132, 101, 134]
      },
      {
        name: '平凡岁月',
        type: 'line',
        stack: '总量',
        // areaStyle: { normal: {} },
        data: [220, 182, 191, 234]
      },
      {
        name: '你我他',
        type: 'line',
        stack: '总量',
        // areaStyle: { normal: {} },
        data: [150, 232, 201, 154]
      },
      {
        name: '好的人生',
        type: 'line',
        stack: '总量',
        // areaStyle: { normal: {} },
        data: [320, 332, 301, 334]
      },
      {
        name: 'java从入门到放弃',
        type: 'line',
        stack: '总量',
        // areaStyle:	 { normal: {} },
        data: [820, 932, 901, 934]
      }
    ]
  }
  constructor() { }

  ngOnInit() {
  }

}
