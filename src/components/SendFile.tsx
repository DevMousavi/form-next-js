import { myFormData } from "@/util/Types";
import React, { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Select, SelectItem } from "@nextui-org/react";

interface SendFileProps {
    setFormData: React.Dispatch<React.SetStateAction<myFormData[]>>;
}

interface UploadedFile {
    fileName: string;
    fileType: number;
}

const SendFile: React.FC<SendFileProps> = ({ setFormData }) => {
    const [data, setData] = useState<UploadedFile[]>([]);
    const fileTypeRef = useRef(0);

    const { mutate } = useMutation({
        mutationFn: async (formData: FormData) => {
            const request = await axios.post(
                "https://cdn.hidigimenu.com/api/Upload/hidigimenu/Create",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            return request.data.result;
        },
        onSuccess: (result) => {
            const fileName = result;
            const fileType = fileTypeRef.current;
            setData((prevData) => [...prevData, { fileName, fileType }]);
            // ==================================================================
            setFormData((prevFormData) => ({
                ...prevFormData,
                itemFiles: data,
            }));
        },
    });

    const changeTypeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        fileTypeRef.current = parseInt(event.target.value);
    };

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            file: { files: FileList };
        };

        const file = target.file.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("File", file);
            formData.append("UploadType", "2");

            mutate(formData);
        }
    };

    return (
        <>
            <form
                onSubmit={submitHandler}
                className="flex flex-col gap-3 border-2 border-solid rounded-xl border-[rgb(124, 58, 237)] w-[80%] mx-auto px-2 py-4"
            >
                <input
                    type="file"
                    name="file"
                    className="text-sm text-primaryColor font-bold cursor-pointer"
                />
                <Select
                    name="fileType"
                    label="نوع عکس انتخاب شده"
                    className="max-w-xs"
                    onChange={changeTypeHandler}
                >
                    <SelectItem
                        key={1}
                        value="1"
                        className="text-primaryColor font-bold"
                    >
                        گالری
                    </SelectItem>
                    <SelectItem
                        key={2}
                        value="0"
                        className="text-primaryColor font-bold"
                    >
                        کاور
                    </SelectItem>
                </Select>

                <button
                    type="submit"
                    className="btn hover:btn-hover w-24 mx-auto text-xs"
                >
                    ذخیره تصویر
                </button>
            </form>
        </>
    );
};

export default SendFile;
