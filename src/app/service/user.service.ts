import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../entity/user';
import { Observable } from 'rxjs';

@Injectable()

export class UserService {

	constructor(private http: HttpClient) {}

	/**
     * Получает mock-данные пользователей в заданном количестве для заданного количества элементов (всего и на странице)
     * @param {string} count
     * @returns {Observable<User[]>}
     */
	public getData(count: string): Observable<User[]> {
		const dataUrl = `http://www.filltext.com/?rows=${count}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&description={lorem|32}`;
		
		return this.http.get<User[]>(dataUrl);
	}
}