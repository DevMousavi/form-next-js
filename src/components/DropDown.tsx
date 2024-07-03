"use client";

import { useMutation } from "@tanstack/react-query";
import { api } from "../services/config";
import React, { useEffect, useState } from "react";
import { result, senData } from "@/util/Types";

import { Select, SelectItem } from "@nextui-org/react";

const Dropdown = (props: {
    url: string;
    label: string;
    dataSend: senData;
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

    if (listData?.length == 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex w-[80%] mx-auto border-2 border-solid rounded-xl border-[rgb(124, 58, 237)] flex-wrap md:flex-nowrap gap-4">
            <Select label={props.label} className="max-w-xs">
                {listData?.map((item) => (
                    <SelectItem key={item.id}>{item.name}</SelectItem>
                ))}
            </Select>
        </div>
    );
};

export default Dropdown;
