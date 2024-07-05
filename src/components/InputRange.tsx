import React from "react";
import { myFormData } from "@/util/Types";

const InputRange = ({
    formNameItem,
    label,
    setFormData,
}: {
    formNameItem: string;
    label: string;
    setFormData: React.Dispatch<React.SetStateAction<myFormData[]>>;
}) => {
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: Number(value),
        }));
    };

    return (
        <>
            <div className="w-[80%] text-primaryColor border-2 border-solid border-[rgba(124, 58, 237, 0.301)] relative rounded-md px-2 py-3">
                <label htmlFor="range" className="text-sm">
                    {label}
                </label>
                <span className="w-full text-sm flex flex-row items-center justify-center gap-4">
                    <p>0</p>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        className="w-full"
                        name={formNameItem}
                        onChange={changeHandler}
                    />
                    <p>100</p>
                </span>
            </div>
        </>
    );
};

export default InputRange;
