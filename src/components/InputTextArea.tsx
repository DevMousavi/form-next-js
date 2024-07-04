import React from "react";
import { myFormData } from "@/util/Types";

const InputTextArea = ({
    formNameItem,
    label,
    setFormData,
}: {
    formNameItem: string;
    label: string;
    setFormData: React.Dispatch<React.SetStateAction<myFormData[]>>;
}) => {
    const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <>
            <div className="w-full flex items-center justify-center">
                <textarea
                    name={formNameItem}
                    className="outline-none text-sm border-2 border-solid border-[rgba(124, 58, 237, 0.301)] rounded-md text-primaryColor w-[80%] mx-auto px-2 py-3"
                    placeholder={label}
                    onBlur={changeHandler}
                ></textarea>
            </div>
        </>
    );
};

export default InputTextArea;
