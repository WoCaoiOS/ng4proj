import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-royalties-bill',
  templateUrl: './royalties-bill.component.html',
  styleUrls: ['./royalties-bill.component.css']
})
export class RoyaltiesBillComponent implements OnInit {
	infoList=[
		{bookTitle:'春风十里',authorize:"未签约",wordsCount:2131231,total:112},
		{bookTitle:'围城',authorize:"已签约",wordsCount:2131231,total:112},
		{bookTitle:'四世同堂',authorize:"未签约",wordsCount:2131231,total:112},
		{bookTitle:'彷徨',authorize:"未签约",wordsCount:2131231,total:112}
	]
  constructor() { }

  ngOnInit() {
  }

}
