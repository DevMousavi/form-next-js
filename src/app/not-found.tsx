"use client";

import React from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter();

    const handleBackToHome = () => {
        router.push("/");
    };

    return (
        <div className="bg-white shadowLayOut w-96 h-96 mx-auto flex items-center justify-start rounded-md overflow-hidden">
            <span className="flex flex-col items-center gap-6 justify-center h-full w-full px-4 py-10">
                <h1 className="font-medium shadowLayOut h-9 px-7 rounded-full flex items-center justify-center text-primaryColor ">
                    این صفحه یافت نشد
                </h1>
                <button
                    onClick={handleBackToHome}
                    className="btn hover:btn-hover"
                >
                    بازگشت به صفحه ی اصلی
                </button>
            </span>
        </div>
    );
};

export default NotFound;
