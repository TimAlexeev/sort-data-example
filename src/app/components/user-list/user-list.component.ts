import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { User } from '../../entity/user';
import { UserService } from '../../service/user.service';
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html'
})

export class UserListComponent implements OnInit {

	public usersCount = '54';
	private allUsers: User[];

	constructor (private userService: UserService) {}

	ngOnInit() {
		this.loadUsers(this.usersCount);
	}

	loadUsers(userCount: string) {
		this.userService.getData(userCount).subscribe(users => {
			this.allUsers = users;
		});

	console.log(userCount);
	}
}