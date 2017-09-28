import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.css']
})
export class AuthorInfoComponent implements OnInit {
	genders = [{value:'U',display:'保密'},{ value: 'F', display: '女' },{ value: 'M', display: '男' }];
	user={
		 penName:"葫芦娃",
		 nickerName:"七兄弟",
		 serialNo:"123123",
		 sex:"U",
		 trueName:"张三蛋",
		 phone:"15812145647",
		 QQNumber:"24689455",
		 email:"1234567468@qq.com",
		 IDcard:"342222198812132542",
		 address:"江苏省扬州市江阳中路",
		 introduce:"ihwquihsiqwu"
	}
  constructor() { }

  ngOnInit() {
  }

}
