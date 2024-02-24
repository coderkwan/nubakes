"use client";
import Image from "next/image";
import { useState } from "react";
export default function () {
    const [menu, setMenu] = useState(false);
    function openMenu() {
        setMenu(!menu);
    }
    return (
        <div className=" bg-gray-950 text-white  fixed top-0 right-0 left-0 z-30">
            <div className="py-4 px-4 max-w-[1240px] mx-auto flex justify-between items-center">
                <a href="/" className="text-2xl font-extrabold">
                    nu<span className="text-orange-500">bakes</span>
                </a>
                <div className=" hidden md:flex items-center gap-8">
                    <a
                        href="/products"
                        className="text-md cursor-pointer hover:opacity-75 transition-all duration-200"
                    >
                        Products
                    </a>
                    <a
                        href="/about"
                        className="text-md cursor-pointer hover:opacity-75 transition-all duration-200"
                    >
                        About
                    </a>
                    <a
                        href="/contact"
                        className="text-md cursor-pointer hover:opacity-75 transition-all duration-200"
                    >
                        Contact
                    </a>
                </div>
                <a
                    href="/cart"
                    className="bg-orange-500 rounded-lg px-8 py-2 text-white flex gap-3 items-center cursor-pointer hover:opacity-75 transition-all duration-200"
                >
                    Basket
                    <Image
                        src="/basket.png"
                        alt="cart"
                        height={25}
                        width={25}
                    />
                </a>
                <button
                    onClick={openMenu}
                    className="text-white flex md:hidden gap-3 items-center cursor-pointer hover:opacity-75 transition-all duration-200"
                >
                    <Image src="/menu.png" alt="menu" height={35} width={35} />
                </button>
                {menu && (
                    <nav className="absolute bg-gray-950 top-0 right-0 left-0 py-[2rem] px-3">
                        <div className="flex flex-col items-center gap-8">
                            <div className="flex justify-between w-full border-b pb-4">
                                <a href="/" className="text-2xl font-extrabold">
                                    nu
                                    <span className="text-orange-500">
                                        bakes
                                    </span>
                                </a>
                                <button
                                    onClick={openMenu}
                                    className="text-white flex gap-3 items-center cursor-pointer hover:opacity-75 transition-all duration-200"
                                >
                                    <Image
                                        src="/close.png"
                                        alt="menu close"
                                        height={35}
                                        width={35}
                                    />
                                </button>
                            </div>
                            <div className="flex flex-col items-center gap-8">
                                <a
                                    href="/products"
                                    className="text-md cursor-pointer hover:opacity-75 transition-all duration-200"
                                >
                                    Products
                                </a>
                                <a
                                    href="/about"
                                    className="text-md cursor-pointer hover:opacity-75 transition-all duration-200"
                                >
                                    About
                                </a>
                                <a
                                    href="/contact"
                                    className="text-md cursor-pointer hover:opacity-75 transition-all duration-200"
                                >
                                    Contact
                                </a>
                                <a
                                    href="/cart"
                                    className="bg-orange-500 rounded-lg px-8 py-2 text-white flex gap-3 items-center cursor-pointer hover:opacity-75 transition-all duration-200"
                                >
                                    Basket
                                    <Image
                                        src="/basket.png"
                                        alt="cart"
                                        height={25}
                                        width={25}
                                    />
                                </a>
                            </div>
                        </div>
                    </nav>
                )}
            </div>
        </div>
    );
}
