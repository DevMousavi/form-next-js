import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header className="shadowLayOut bg-white w-96 mx-auto mt-14 flex items-center justify-center h-9 rounded-md pr-4 mb-14 overflow-hidden">
            <span className="w-full flex flex-row-reverse items-center justify-between">
                <h1 className="font-medium bg-primaryColor h-9 px-7 rounded-full flex items-center justify-center text-white rounded-tl-none rounded-bl-none">
                    تمرین تستی Next
                </h1>
                <Link href="/">
                    <Image
                        src="/Logo.png"
                        alt="logo"
                        width={50}
                        height={50}
                        className="w-7 h-7"
                    />
                </Link>
            </span>
        </header>
    );
};

export default Header;
