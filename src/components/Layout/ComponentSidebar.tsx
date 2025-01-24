"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import assets from "@/json/assets";
export const individualRoute = [
    {
        pathname: "Button",
        path: "/ui-components/button",
    },
    {
        pathname: "Input",
        path: "/ui-components/input",
    },
    {
        pathname: "Radio",
        path: "/ui-components/radio",
    },
];

const ComponentSidebar = () => {

    const router = usePathname();

    return (
        <>
            <div
                className={`fixed top-0 left-0 z-10 bg-primary transition-all duration-400 p-4 h-screen w-48`}
            >
                <div className="mb-16 flex justify-center">
                    <Link href="/">
                        <Image
                            src={assets.logoimage}
                            width="131"
                            height="15"
                            alt="Logo"
                        />
                    </Link>
                </div>
                <nav className="flex flex-col space-y-4">
                    <ul>
                        {individualRoute.map((item) => (
                            <li key={item.pathname} className="mb-2">
                                <Link
                                    href={item.path}
                                    className={`flex items-center p-3 rounded transition-colors ${router === item.path ? "bg-primary-dark" : "hover:bg-primary-dark"}`}
                                >
                                    <span className={`ml-4 text-white text-sm transition-all block`}>{item.pathname}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        <li>
                            <Link href="/settings-vendor" className="flex items-center p-3 rounded hover:bg-primary-dark">
                                <span className={`ml-4 text-white text-sm block`}>Settings</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default ComponentSidebar;
