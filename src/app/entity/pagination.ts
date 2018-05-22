// Сущность "Паджинация"
export class Pagination {

	constructor (
		public totalItems: number,
    	public currentPage: number,
    	public itemsPerPage: number,
    	public totalPages: number,
    	public startPage: number,
    	public endPage: number,
    	public pages: Number[]) {}
}