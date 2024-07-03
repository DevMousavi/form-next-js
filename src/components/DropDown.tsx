"use client";

import { useMutation } from "@tanstack/react-query";
import { api } from "../services/config";
import React, { useEffect, useState } from "react";
import { result, senData } from "@/util/Types";

const Dropdown = (props: {
    url: string;
    label: string;
    dataSend: senData;
}): JSX.Element => {
    const [listData, setListData] = useState<result[] | null>(null);

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

    return (
        <>
            <div className="dropDownContainer">
                <label className="labelContainer" htmlFor="mealType">
                    {props.label}
                </label>
                <select
                    className="outline-none w-full cursor-pointer"
                    id="mealType"
                >
                    <option>{""}</option>
                    {listData?.map((item) => (
                        <option value={item.id} key={item.id}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default Dropdown;
