import React from "react";

const InputText = ({ label }: { label: string }) => {
    return (
        <>
            <div className="coolinput">
                <label htmlFor="input" className="text">
                    {label}
                </label>
                <input
                    type="text"
                    placeholder={`${label} را وارد کنید...`}
                    name="input"
                    className="input"
                />
            </div>
            ;
        </>
    );
};

export default InputText;
