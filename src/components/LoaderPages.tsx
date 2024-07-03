import React from "react";

function Loader() {
    return (
        <div className="text-center h-full w-full flex flex-col items-center justify-center">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primaryColor mx-auto"></div>
            <h2 className="text-primaryColor font-bold mt-4">
                در حال پردازش اطلاعات
            </h2>
            <p className="text-primaryColor font-bold opacity-50">
                لطفا صبر کنید
            </p>
        </div>
    );
}

export default Loader;
