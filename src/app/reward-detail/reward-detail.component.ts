import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reward-detail',
  templateUrl: './reward-detail.component.html',
  styleUrls: ['./reward-detail.component.css']
})
export class RewardDetailComponent implements OnInit {
	infoList=[
		{bookTitle:'春风十里',date:"2017-09-15 12:10:10",type:"都市言情",money:112},
		{bookTitle:'围城',date:"2017-09-15 12:10:10",type:"都市言情",money:112},
		{bookTitle:'四世同堂',date:"2017-09-15 12:10:10",type:"都市言情",money:112},
		{bookTitle:'彷徨',date:"2017-09-15 12:10:10",type:"都市言情",money:112}
	]
  constructor() { }

  ngOnInit() {
  }

}
