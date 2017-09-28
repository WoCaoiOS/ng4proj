import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-manager',
  templateUrl: './comment-manager.component.html',
  styleUrls: ['./comment-manager.component.css','../apply-contract/apply-contract.component.css']
})
export class CommentManagerComponent implements OnInit {
	commentList = [
		{bookID:123,bookName:"《金秋十月》",commentCount:123},
		{bookID:124,bookName:"《金秋十月》",commentCount:123},
		{bookID:125,bookName:"《金秋十月》",commentCount:123},
		{bookID:126,bookName:"《金秋十月》",commentCount:123},
		{bookID:127,bookName:"《金秋十月》",commentCount:123}
	];
	index = -1;
	deleteCom(index){
		this.index = index;
		if (confirm("确认删除？")) {
			this.commentList.splice(this.index,1);
		}
	}
  constructor() { }

  ngOnInit() {
  }

}
