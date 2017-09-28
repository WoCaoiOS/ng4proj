import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorize-income',
  templateUrl: './authorize-income.component.html',
  styleUrls: ['./authorize-income.component.css']
})
export class AuthorizeIncomeComponent implements OnInit {
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
