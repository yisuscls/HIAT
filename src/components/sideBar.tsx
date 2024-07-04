"use client";
import Image from "next/image";
import { useState, Dispatch, SetStateAction } from "react";

interface SideBarProps {
    showSidebar: boolean;
    setShowSidebar: Dispatch<SetStateAction<boolean>>;
}

export default function SideBar({ showSidebar, setShowSidebar }: SideBarProps) {
    return (
        <div>
            {showSidebar ? (
                <aside className="sideBar px-2.5 shadow-gray-900/20 transition-300 ease-in-out w-64 rounded border border-green-400">
                    <div className="flex relative items-center px-3.5 h-16" onClick={() => setShowSidebar(!showSidebar)}>
                        <Image className="w-13 mx-3.5 min-h-fit" alt="logo uprm" src="/logo-uprm-white.png" width={45} height={45} />
                        <h3 className="pl-1 logo-name text-4xl">HIAT</h3>
                    </div>
                    <div className="bg-green-300 h-[1px]"></div>
                    <nav className="flex flex-col gap-2 transition duration-300"></nav>
                </aside>
            ) : (
                <div></div>
            )}
        </div>
    );
}
