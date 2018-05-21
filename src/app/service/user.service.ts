import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../entity/user';
import { Observable } from 'rxjs';

@Injectable()

export class UserService {

	private dataUrl: string = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&description={lorem|32}';

	constructor(private http: HttpClient) {}

	public getData(): Observable<User[]> {
		return this.http.get<User[]>(this.dataUrl);
	}

}