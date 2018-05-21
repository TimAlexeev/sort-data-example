import { Component, OnInit } from '@angular/core';
import { User } from '../../entity/user';
import { UserService } from '../../service/user.service';
import { Observable } from "rxjs/Observable";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

	private users: User[];
	count: number = 0;
  	offset: number = 0;
  	limit: number = 20;

	constructor (private userService: UserService, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
		this.userService.getData().subscribe(users => {
			this.users = users;
			this.count = users.length;
		});
	}

	onPageChange(offset) {
    	this.offset = offset;
    	this.router.navigate(['/user-list', (offset / this.limit) + 1]);
  }
}