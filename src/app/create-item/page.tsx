"use client";

import InputText from "../../components/InputText";
import Dropdown from "../../components/DropDown";
import React, { useState } from "react";
import InputTextArea from "../../components/InputTextArea";
import InputRange from "../../components/InputRange";
import { myFormData } from "../../util/Types";
import DropdownGet from "../../components/DropDownGet";
import Btn from "../../components/Btn";
import Tags from "../../components/Tags";
import SendFile from "../../components/SendFile";
import SelectDays from "../../components/SelectDays";
import ItemPrinters from "../../components/ItemPrinters";

const page = () => {
    const [formData, setFormData] = useState<myFormData[]>([]);
    console.log("formData : ", formData);

    const dataSend = {
        totalCount: 0,
        pageIndex: 0,
        itemsPerPage: 0,
        items: "null",
        sortBy: "id",
        sortOrder: 0,
    };

    return (
        <div className="mobileContainer shadowLayOut  py-9 items-center justify-start flex-col gap-4">
            <h2 className="font-bold text-primaryColor flex flex-row-reverse gap-2 items-center justify-center border border-solid border-primaryColor px-3 py-2 rounded-md containerTextShadow">
                <span>***</span>
                <span>Create</span>
                <span>Item</span>
                <span>Form</span>
                <span>***</span>
            </h2>
            <Dropdown
                url={"/Sale/v1/Category/hidigimenu/List/1"}
                label={"لیست دسته بندی ها"}
                dataSend={dataSend}
                setFormData={setFormData}
                name="categoriesId"
            />
            <InputText
                label={"اسم"}
                setFormData={setFormData}
                formNameItem="name"
            />
            <InputText
                label={"کد محصول"}
                setFormData={setFormData}
                formNameItem="itemCode"
            />
            <InputTextArea
                formNameItem="description"
                label="توضیحات مورد نظر را وارد کنید..."
                setFormData={setFormData}
            />
            <InputRange
                formNameItem="priority"
                label="اولویت محصول را مشخص کنید"
                setFormData={setFormData}
            />
            <InputRange
                formNameItem="preparationTime"
                label="مدت زمان را مشخص کنید"
                setFormData={setFormData}
            />
            <DropdownGet
                name="mealType"
                url="/Sale/v1/Item/hidigimenu/MealType"
                label="وعده غذایی"
                setFormData={setFormData}
            />
            <InputText
                label={"موجودی روزانه"}
                setFormData={setFormData}
                formNameItem="dailyInventory"
            />
            <InputText
                label={"2موجودی روزانه"}
                setFormData={setFormData}
                formNameItem="fixDailyInventory"
            />
            <DropdownGet
                name="lable"
                url="/Sale/v1/Item/hidigimenu/ShowLable"
                label="برچسب"
                setFormData={setFormData}
            />
            <DropdownGet
                name="displayStatus"
                url="/Sale/v1/Item/hidigimenu/DisplayStatus"
                label="وضعیت نمایش"
                setFormData={setFormData}
            />
            <Btn setFormData={setFormData} formNameItem="status" />
            <InputText
                label={"قیمت واقعی محصول"}
                setFormData={setFormData}
                formNameItem="price"
            />
            <InputText
                label={"قیمت محصول بعد از تخفیف"}
                setFormData={setFormData}
                formNameItem="priceAfterDiscount"
            />
            <InputText
                label={"هزینه بسته بندی"}
                setFormData={setFormData}
                formNameItem="packagingCost"
            />
            <InputRange
                formNameItem="taxPercent"
                label="درصد مالیات"
                setFormData={setFormData}
            />
            <Tags
                formNameItem="tags"
                label="تگ های محصول را وارد کنید"
                setFormData={setFormData}
            />
            <SendFile setFormData={setFormData} />
            <SelectDays
                url="/Sale/v1/Item/hidigimenu/Weekdays"
                setFormData={setFormData}
                formNameItem="weekdays"
            />
            <ItemPrinters
                dataSend={dataSend}
                setFormData={setFormData}
                name="itemPrinters"
            />
        </div>
    );
};

export default page;

// {
//     "categoriesId": 0,                    +
//     "name": "string",                     +
//     "itemCode": "stri",                   +
//     "description": "string",              +
//     "priority": 0,                        +
//     "parentId": 0,                        +
//     "preparationTime": 0,                 +
//     "mealType": 0,                        +
//     "dailyInventory": 0,                  +
//     "fixDailyInventory": 0,               +
//     "lable": 0,                           +
//     "displayStatus": 0,                   +
//     "status": 0,                          +
//     "price": 0,                           +
//     "priceAfterDiscount": 0,              +
//     "packagingCost": 0,                   +
//     "taxPercent": 0,                      +
//     "tags": [                             +
//       "string"                            +
//     ],                                    +
//     "itemFiles": [                        +
//       {                                   +
//         "fileName": "string",             +
//         "fileType": 0                     +
//       }                                   +
//     ],                                    +
//     "weekdays": [                         +
//       0                                   +
//     ],                                    +
//     "itemPrinters": [
//       {
//         "serviceTypeId": 0,
//         "printerId": 0
//       }
//     ]
//   }
