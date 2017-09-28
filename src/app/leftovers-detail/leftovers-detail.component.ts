import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftovers-detail',
  templateUrl: './leftovers-detail.component.html',
  styleUrls: ['./leftovers-detail.component.css']
})
export class LeftoversDetailComponent implements OnInit {
	infoList=[
		{bookTitle:'春风十里',date:"2017-09-15 12:10:10",royalties:120,reward:20,authorize:112},
		{bookTitle:'围城',date:"2017-09-15 12:10:10",royalties:120,reward:20,authorize:112},
		{bookTitle:'四世同堂',date:"2017-09-15 12:10:10",royalties:120,reward:20,authorize:112},
		{bookTitle:'彷徨',date:"2017-09-15 12:10:10",royalties:120,reward:20,authorize:112}
	]
  constructor() { }

  ngOnInit() {
  }

}
