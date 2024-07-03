import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "@/util/Providers";
import Layout from "@/layout/Layout";
import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
    title: "form-next-js",
    description: "form-next-js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl">
            <body>
                <ClientProvider>
                    <NextUIProvider>
                        <Layout>{children}</Layout>
                    </NextUIProvider>
                </ClientProvider>
            </body>
        </html>
    );
}
