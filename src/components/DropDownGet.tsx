"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "../services/config";
import React, { useEffect, useState } from "react";
import { resultGet } from "@/util/Types";
import { myFormData } from "@/util/Types";

import { Select, SelectItem } from "@nextui-org/react";

const Dropdown = (props: {
    url: string;
    label: string;
    setFormData: React.Dispatch<React.SetStateAction<myFormData[]>>;
    name: string;
}): JSX.Element => {
    const [listData, setListData] = useState<resultGet[]>([]);

    const { data } = useQuery({
        queryKey: [props.name],
        queryFn: async (): Promise<any> => {
            const request = await api.get(props.url);
            return request;
        },
    });

    useEffect(() => {
        if (data && data.status === 200 && data.data.status === 0) {
            setListData(data.data.result);
        }
    }, [data]);

    const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        props.setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <div className="flex w-[80%] mx-auto border-2 border-solid rounded-xl border-[rgb(124, 58, 237)] flex-wrap md:flex-nowrap gap-4">
            <Select
                name={props.name}
                label={listData?.length == 0 ? "در حال پردازش" : props.label}
                className="max-w-xs"
                onChange={changeHandler}
            >
                {listData?.map((item) => (
                    <SelectItem
                        key={item.value}
                        className="text-primaryColor font-bold"
                    >
                        {item.content}
                    </SelectItem>
                ))}
            </Select>
        </div>
    );
};

export default Dropdown;
