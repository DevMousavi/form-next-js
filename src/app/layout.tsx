import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "@/util/Providers";
import Layout from "@/layout/layout";

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
                    <Layout>{children}</Layout>
                </ClientProvider>
            </body>
        </html>
    );
}
