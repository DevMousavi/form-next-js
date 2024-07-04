"use client";
import { myFormData } from "../util/Types";
import React, { useState } from "react";

const Tags = ({
    formNameItem,
    label,
    setFormData,
}: {
    formNameItem: string;
    label: string;
    setFormData: React.Dispatch<React.SetStateAction<myFormData[]>>;
}) => {
    const [tags, setTags] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputValue.trim() !== "") {
            setTags((prevTags) => [...prevTags, inputValue]);
            setInputValue("");
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const onBlurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: tags,
        }));
    };

    return (
        <>
            <form
                onSubmit={submitHandler}
                className="flex flex-row items-center relative"
            >
                <div className="coolinput absolute">
                    <label htmlFor="input" className="text text-nowrap">
                        {label}
                    </label>
                    <input
                        type="text"
                        placeholder="......."
                        value={inputValue}
                        name={formNameItem}
                        onChange={handleChange}
                        onBlur={onBlurHandler}
                        className="input"
                    />
                </div>
                <button
                    className="absoluteCenter cursor-pointer hover:opacity-80 primaryTransition bg-primaryColor w-6 rounded-full h-[40%] font-bold text-xl text-white flex items-center justify-center"
                    type="submit"
                >
                    +
                </button>
            </form>
        </>
    );
};

export default Tags;
