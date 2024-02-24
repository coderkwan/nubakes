import Image from "next/image";

export default function () {
    return (
        <div className="bg-gray-300">
            <div className="py-[5rem] px-7 max-w-[1240px] mx-auto flex flex-col gap-9 md:flex-row justify-between text-center md:text-start items-center md:items-start">
                <div>
                    <a href="/" className="text-5xl font-extrabold mb-3">
                        nubakes
                    </a>
                    <p>We create taste that</p>
                    <p>you will never forget</p>
                </div>
                <div className="flex flex-col gap-2">
                    <a
                        href="/products"
                        className="text-lg cursor-pointer hover:opacity-75 transition-all duration-200"
                    >
                        Products
                    </a>
                    <a
                        href="/about"
                        className="text-lg cursor-pointer hover:opacity-75 transition-all duration-200"
                    >
                        About
                    </a>
                    <a
                        href="/contact"
                        className="text-lg cursor-pointer hover:opacity-75 transition-all duration-200"
                    >
                        Contact
                    </a>
                    <a
                        href="/cart"
                        className="bg-orange-500 rounded-lg px-8 py-2 mt-3 text-white flex gap-2 items-center cursor-pointer hover:opacity-75 transition-all duration-200"
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
                <div className="flex flex-col items-center md:items-center gap-1 text-end">
                    <a
                        href="tel:26876705039"
                        className="text-lg cursor-pointer hover:opacity-75 transition-all duration-200"
                    >
                        +268 7670 5039
                    </a>
                    <a
                        href="mailto:nubakes@gmail.com"
                        className="text-lg cursor-pointer hover:opacity-75 transition-all duration-200"
                    >
                        nubakes@gmail.com
                    </a>
                    <div className="flex gap-3 justify-end">
                        <a href="https://instagram.com/lamperosmedia">
                            <Image
                                src="/insta.png"
                                width={30}
                                height={30}
                                alt="instagram"
                            />
                        </a>
                        <a href="https://facebook.com/lamperosm">
                            <Image
                                src="/fb.png"
                                width={30}
                                height={30}
                                alt="instagram"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <p className="py-4 text-center uppercase text-xs  border-t border-orange-500">
                Built with care by{" "}
                <a
                    href="https://lamperosmedia.com"
                    target="_blank"
                    className="text-indigo-900"
                >
                    {" "}
                    Lamperos Media
                </a>
            </p>
        </div>
    );
}
