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

export interface FormData {
    categoriesId: number;
    name: string;
    itemCode: string;
    description: string;
    priority: number;
    parentId: number;
    preparationTime: number;
    mealType: number;
    dailyInventory: number;
    fixDailyInventory: number;
    label: number;
    displayStatus: number;
    status: number;
    price: number;
    priceAfterDiscount: number;
    packagingCost: number;
    taxPercent: number;
    tags: string[];
    itemFiles: [
        {
            fileName: string;
            fileType: number;
        }
    ];
    weekdays: number[];
    itemPrinters: [
        {
            serviceTypeId: number;
            printerId: number;
        }
    ];
}
