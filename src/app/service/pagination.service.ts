import { Injectable } from '@angular/core';
import { Pagination } from '../entity/pagination';

@Injectable()

export class PaginationService {

	/**
     * Получает объект паджинации для заданного количества элементов (всего и на странице)
     * @param {number} totalItems
     * @param {number} currentPage
     * @param {number} itemsPerPage
     * @returns {Pagination}
     */
	getPagination(totalItems: number, currentPage: number = 1, itemsPerPage: number = 10): Pagination {

       	// подсчитываем общее число страниц
        const totalPages = Math.ceil(totalItems / itemsPerPage);
 
        // приводим номер текущей страницы в соответствие диапазону страниц
        if (currentPage < 1) {
            currentPage = 1;
        } else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
         
        const startPage = 1, endPage = totalPages;
 
        // создаем массив номеров всех страниц
        const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
 
        // возвращаем объект паджинации
        return new Pagination (
        	totalItems,
    		currentPage,
    		itemsPerPage,
    		totalPages,
    		startPage,
    		endPage,
    		pages
        );
    }

   	/**
     * Получает начальный и конечный индексы элементов для страницы
     * @param {Pagination} paginationObject
     */
    getIndexesPerPage(paginationObject: Pagination) {

    	if (!paginationObject) {
    		return;
    	}

    	// подсчитываем индексы первого и последнего элементов для текущей страницы
        const startIndex = (paginationObject.currentPage - 1) * paginationObject.itemsPerPage;
        const endIndex = Math.min(startIndex + paginationObject.itemsPerPage - 1, paginationObject.totalItems - 1);

        return {
        	startIndex: startIndex,
        	endIndex: endIndex
        };
    }
}