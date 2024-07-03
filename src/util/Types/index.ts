export type senData = {
    totalCount: number;
    pageIndex: number;
    itemsPerPage: number;
    items: string;
    sortBy: string;
    sortOrder: number;
};

export interface result {
    id: number;
    name: string;
    priority: number;
    parentName: null;
    fileName: string;
    status: number;
    statusDescription: string;
    lastUpdate: string;
    persianDateLastUpdate: string;
}
