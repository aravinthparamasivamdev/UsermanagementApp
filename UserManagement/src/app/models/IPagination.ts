export interface IPagination {
    limit: number;
    links: object;
    page: number;
    pages: number;
    total: number;
}

export interface IPaginationMeta {
    pagination: IPagination;    
}