"use client";

import { useMutation } from "@tanstack/react-query";
import { api } from "../services/config";
import React, { useEffect, useState } from "react";
import { result, senData } from "@/util/Types";
import { myFormData } from "@/util/Types";

import { Select, SelectItem } from "@nextui-org/react";

const DropdownGet = (props: {
    url: string;
    label: string;
    dataSend: senData;
    setFormData: React.Dispatch<React.SetStateAction<myFormData[]>>;
    name: string;
}): JSX.Element => {
    const [listData, setListData] = useState<result[]>([]);

    const { mutate } = useMutation({
        mutationFn: async (data: senData): Promise<any> => {
            const request = await api.post(props.url, data);
            return request;
        },
    });

    useEffect(() => {
        mutate(props.dataSend, {
            onSuccess: (data) => {
                setListData(data.data.result.items);
            },
            onError: (error) => {
                console.log(error);
            },
        });
    }, []);

    const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        props.setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: Number(value),
            parentId: null,
        }));
    };

    return (
        <div className="flex w-[80%] mx-auto border-2 border-solid rounded-xl border-[rgb(124, 58, 237)] flex-wrap gap-4">
            <Select
                name={props.name}
                label={listData?.length == 0 ? "در حال پردازش" : props.label}
                className="max-w-xs"
                onChange={changeHandler}
            >
                {listData?.map((item) => (
                    <SelectItem
                        key={item.id}
                        className="text-primaryColor font-bold"
                    >
                        {item.name}
                    </SelectItem>
                ))}
            </Select>
        </div>
    );
};

export default DropdownGet;
