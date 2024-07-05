import { api } from "@/services/config";
import { myFormData, senData } from "@/util/Types";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";

const ItemPrinters = (props: {
    dataSend: senData;
    setFormData: React.Dispatch<React.SetStateAction<myFormData[]>>;
    name: string;
}) => {
    const [servicesData, setServicesData] = useState<any>([]);
    const [itemData, setItemData] = useState<any>([]);
    const serviceTypeIdRef = useRef<string | null>(null);
    const printerIdRef = useRef<string | null>(null);
    const [data, setData] = useState<
        { serviceTypeId: number; printerId: number }[]
    >([]);

    useEffect(() => {
        props.setFormData((prevFormData) => ({
            ...prevFormData,
            [props.name]: data,
        }));
    }, [data]);

    const { mutate } = useMutation({
        mutationFn: async (data: senData): Promise<any> => {
            const request = await api.post(
                "/Branch/v1/ServiceType/hidigimenu/List",
                data
            );
            return request;
        },
    });

    const { mutate: mutateItem } = useMutation({
        mutationFn: async (data: senData) => {
            const request = await api.post(
                "/Branch/v1/Printer/hidigimenu/List",
                data
            );
            return request;
        },
    });

    useEffect(() => {
        mutateItem(props.dataSend, {
            onSuccess: (data) => {
                setItemData(data.data.result.items);
            },
            onError: (error) => {
                console.log(error);
            },
        });
        mutate(props.dataSend, {
            onSuccess: (data) => {
                setServicesData(data.data.result.items);
            },
            onError: (error) => {
                console.log(error);
            },
        });
    }, []);

    const handleSave = () => {
        if (serviceTypeIdRef.current && printerIdRef.current) {
            const newData = {
                serviceTypeId: parseInt(serviceTypeIdRef.current),
                printerId: parseInt(printerIdRef.current),
            };
            setData((prevData) => [...prevData, newData]);
        }
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-4 w-[80%] mx-auto border-2 border-solid rounded-xl border-[rgb(124, 58, 237)] px-2 py-3">
                <form className="w-full flex items-center flex-row justify-between ">
                    <div className="flex w-[40%] mx-auto border-2 border-solid rounded-xl border-[rgb(124, 58, 237)] flex-wrap gap-4">
                        <Select
                            name=""
                            label={
                                servicesData?.length == 0
                                    ? "در حال پردازش"
                                    : "دیتا اومد"
                            }
                            className="max-w-xs"
                            onChange={(e) => {
                                serviceTypeIdRef.current = e.target.value;
                            }}
                        >
                            {servicesData?.map((item: any) => (
                                <SelectItem
                                    key={item.id}
                                    className="text-primaryColor font-bold"
                                    value={item.id.toString()}
                                >
                                    {item.name}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>
                    <div className="flex w-[40%] mx-auto border-2 border-solid rounded-xl border-[rgb(124, 58, 237)] flex-wrap gap-4">
                        <Select
                            name=""
                            label={
                                itemData?.length == 0
                                    ? "در حال پردازش"
                                    : "دیتا اومد"
                            }
                            className="max-w-xs"
                            onChange={(e) => {
                                printerIdRef.current = e.target.value;
                            }}
                        >
                            {itemData?.map((item: any) => (
                                <SelectItem
                                    key={item.id}
                                    className="text-primaryColor font-bold"
                                    value={item.id.toString()}
                                >
                                    {item.name}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>
                </form>
                <button
                    className="btn hover:btn-hover w-11 text-sm flex items-center justify-center flex-row"
                    onClick={handleSave}
                >
                    ثبت
                </button>
            </div>
        </>
    );
};

export default ItemPrinters;
