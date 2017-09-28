import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; // (1)
import 'rxjs/add/operator/map'; // (2)

@Component({
  selector: 'app-author-homepage',
  templateUrl: './author-homepage.component.html',
  styleUrls: ['./author-homepage.component.css']
})
export class AuthorHomepageComponent implements OnInit {
	name = "张三";
	serialNo="12788";
	totalMomey=100;
	canUseMoney=100;
	surplusMoney=10;
	balanceMoney=10;
	totalIncome=20;
	noticeInfo="【活动】快快快快苦苦";
	imgUrl="http://pic.baike.soso.com/p/20140221/20140221033959-777378813.jpg";
  deleteIndex=-1;
	bookList=[];
	getBookLists() {
    let MEMBERS_URL = 'http://route.showapi.com/92-92?showapi_appid=44993&showapi_sign=82829efed7b04e2a8df1dd79a1814c55&page=1&limit=10&id=9';
    let xhr = new XMLHttpRequest(); // (1)
    xhr.open("GET", MEMBERS_URL); // (2)
    xhr.onreadystatechange = () => { // (3)
      if (xhr.readyState == 4 && xhr.status == 200) { // (4)
        if (xhr.responseText) {
          try {
          	console.log(xhr.responseText);
            this.bookList = JSON.parse(xhr.responseText).showapi_res_body.bookList; // (5)
            for (var i = 0; i < this.bookList.length; ++i) {
            	this.bookList[i].img = this.imgUrl;
            }
          } catch (error) {
            throw error;
          }
        }
      }
    };
    xhr.send(null); // (6)
  }
  deleteBook(index){
    this.deleteIndex = index;
    if (confirm("确认删除？")) {
      this.bookList.splice(this.deleteIndex,1);
    }
  }
  constructor() { 

  }

  ngOnInit() {
  	this.getBookLists();
  }

}
