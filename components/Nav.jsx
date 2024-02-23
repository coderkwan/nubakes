import Image from "next/image";
export default function () {
    return (
        <div className=" bg-gray-950 text-white border-b fixed top-0 right-0 left-0 z-30">
            <div className="py-4 max-w-[1240px] mx-auto flex justify-between items-center">
                <a href="/" className="text-2xl font-extrabold">
                    nu<span className="text-orange-500">bakes</span>
                </a>
                <div className="flex items-center gap-8">
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
            </div>
        </div>
    );
}
