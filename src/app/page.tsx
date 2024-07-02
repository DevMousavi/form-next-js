import Link from "next/link";

export default function Home() {
    return (
        <main>
            <ul className="w-96 h-96 mx-auto my-5 shadowLayOut rounded-xl flex flex-col items-center justify-center gap-8">
                <li className="btn hover:btn-hover w-20 flex items-center justify-center">
                    <Link href="/singing">ورود</Link>
                </li>
                <li className="btn hover:btn-hover w-20 flex items-center justify-center">
                    <Link href="/register">ثبت نام</Link>
                </li>
            </ul>
        </main>
    );
}
