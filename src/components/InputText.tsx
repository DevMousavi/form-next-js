import React from "react";

const InputText = ({
    label,
    setFormData,
    formNameItem,
}: {
    label: string;
    setFormData: React.Dispatch<React.SetStateAction<FormData[]>>;
    formNameItem: string;
}) => {
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    return (
        <>
            <div className="coolinput">
                <label htmlFor="input" className="text">
                    {label}
                </label>
                <input
                    type="text"
                    placeholder={`${label} را وارد کنید...`}
                    name={formNameItem}
                    className="input"
                    onChange={changeHandler}
                />
            </div>
        </>
    );
};

export default InputText;
