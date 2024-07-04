"use client";

import { myFormData } from "../util/Types";
import { api } from "../services/config";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

interface Day {
    value: string;
    content: string;
}

const SelectDays = ({
    formNameItem,
    setFormData,
    url,
}: {
    formNameItem: string;
    url: string;
    setFormData: React.Dispatch<React.SetStateAction<myFormData[]>>;
}) => {
    const [days, setDays] = useState<string[]>([]);
    useEffect(() => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [formNameItem]: days,
        }));
    }, [days]);

    const { data } = useQuery({
        queryKey: ["Days"],
        queryFn: async (): Promise<any> => {
            const request = await api.get(url);
            return request;
        },
    });

    const selectDaysHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDay = event.target.value;
        if (event.target.checked) {
            setDays([...days, selectedDay]);
        } else {
            setDays(days.filter((day) => day !== selectedDay));
        }
    };

    return (
        <>
            <div className="px-4 py-6 flex flex-col gap-2 items-start w-[80%] mx-auto border-2 border-solid border-[rgba(124, 58, 237, 0.301)] rounded-md text-primaryColor">
                {data && data.data.result ? (
                    data.data.result.map((item: Day) => (
                        <label
                            key={item.value}
                            className="flex flex-row items-center justify-center gap-3 text-sm"
                        >
                            <input
                                type="checkbox"
                                onChange={selectDaysHandler}
                                value={item.value}
                            />
                            {item.content}
                        </label>
                    ))
                ) : (
                    <p className="px-4 py-6 flex flex-col gap-2 items-start w-[80%] mx-auto border-2 border-solid border-[rgba(124, 58, 237, 0.301)] rounded-md text-primaryColor">
                        در حال پردازش اطلاعات...
                    </p>
                )}
            </div>
        </>
    );
};

export default SelectDays;
