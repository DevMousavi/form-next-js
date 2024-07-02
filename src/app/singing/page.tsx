"use client";

import React, { useRef, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../services/config.js";
import { useRouter } from "next/navigation.js";
import setCookies from "../../util/setCookies";

const Page = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const { mutate } = useMutation({
        mutationFn: async (userInfo: {
            userName: string;
            password: string;
        }) => {
            const request = await api.post(
                "/api/Authentication/Signin",
                userInfo
            );
            return request;
        },
    });

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const userInfo = {
            userName: userNameRef.current?.value || "",
            password: passwordRef.current?.value || "",
        };

        mutate(userInfo, {
            onSuccess: (data) => {
                if (data.data.status === 0) {
                    setCookies("token", data.data.result.token);
                    router.push("/create-item");
                } else {
                    alert("اطلاعات به درستی وارد نشده است.");
                }
            },
            onError: (error) => {
                console.log(error);
            },
        });
    };

    return (
        <div className="mobileContainer shadowLayOut">
            <form
                onSubmit={submitHandler}
                className="flex flex-col gap-5 w-full px-10"
            >
                <span className="flex flex-col gap-1 w-full">
                    <label htmlFor="userName" className="opacity-50 text-sm">
                        نام کاربری خود را وارد کنید
                    </label>
                    <input
                        type="text"
                        id="userName"
                        className="inputContainer"
                        ref={userNameRef}
                    />
                </span>
                <span className="flex flex-col gap-1 w-full">
                    <label htmlFor="password" className="opacity-50 text-sm">
                        رمز عبور خود را وارد کنید
                    </label>
                    <span className="flex flex-row items-center inputContainer">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="w-full h-full outline-none"
                            ref={passwordRef}
                        />
                        {showPassword ? (
                            <FaRegEye
                                className="w-5 h-5 ml-1 cursor-pointer"
                                onClick={() => {
                                    setShowPassword(
                                        (prevShowPassword) => !prevShowPassword
                                    );
                                }}
                            />
                        ) : (
                            <FaRegEyeSlash
                                className="w-5 h-5 ml-1 cursor-pointer"
                                onClick={() => {
                                    setShowPassword(
                                        (prevShowPassword) => !prevShowPassword
                                    );
                                }}
                            />
                        )}
                    </span>
                </span>
                <button
                    type="submit"
                    className="btn hover:btn-hover w-20 mx-auto"
                >
                    ورود
                </button>
            </form>
        </div>
    );
};

export default Page;
