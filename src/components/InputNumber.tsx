import React from "react";
import { myFormData } from "@/util/Types";

const InputNumber = ({
    label,
    setFormData,
    formNameItem,
}: {
    label: string;
    setFormData: React.Dispatch<React.SetStateAction<myFormData[]>>;
    formNameItem: string;
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
            <div className="coolinput">
                <label htmlFor="input" className="text text-nowrap">
                    {label}
                </label>
                <input
                    type="text"
                    placeholder={`${label} را وارد کنید...`}
                    name={formNameItem}
                    className="input"
                    onBlur={changeHandler}
                />
            </div>
        </>
    );
};

export default InputNumber;
