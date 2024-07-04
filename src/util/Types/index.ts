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
export interface resultGet {
    value: string;
    content: string;
}

export interface myFormData {
    categoriesId: string;
    name: string;
    itemCode: string;
    description: string;
    priority: string;
    parentId: string;
    preparationTime: string;
    mealType: string;
    dailyInventory: string;
    fixDailyInventory: string;
    label: string;
    displayStatus: string;
    status: string;
    price: string;
    priceAfterDiscount: string;
    packagingCost: string;
    taxPercent: string;
    tags: string[];
    itemFiles: [
        {
            fileName: string;
            fileType: string;
        }
    ];
    weekdays: string[];
    itemPrinters: [
        {
            serviceTypeId: string;
            printerId: string;
        }
    ];
}
