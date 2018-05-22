import { Component, OnInit, Input } from '@angular/core';
import { PaginationService } from '../../service/pagination.service';
import { User } from '../../entity/user';
import { Pagination } from '../../entity/pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {

  private pagination: Pagination;
  private usersPerPage: User[];

  constructor(private paginationService: PaginationService) { }

  @Input() allUsers: User[];

  ngOnInit() {
    this.setPage(1);
  }

  setPage(page: number) {

    // получаем объект паджинации
    this.pagination = this.paginationService.getPagination(this.allUsers.length, page);

    // получаем индексы элементов для выбранной страницы
    const pageIndexes = this.paginationService.getIndexesPerPage(this.pagination);

    // выделяем элементы для выбранной страницы
    this.usersPerPage = this.allUsers.slice(pageIndexes.startIndex, pageIndexes.endIndex + 1);
    }
}