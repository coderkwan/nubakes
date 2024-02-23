import Image from "next/image";

export default function () {
    return (
        <div className="bg-gray-300">
            <div className="py-[5rem] max-w-[1240px] mx-auto flex justify-between items-start">
                <div>
                    <a href="/" className="text-5xl font-extrabold">
                        nubakes
                    </a>
                    <p>We create taste that</p>
                    <p>you will never forget</p>
                </div>
                <div className="flex flex-col gap-2">
                    <a href="/product" className="text-lg">
                        Products
                    </a>
                    <a href="/about" className="text-lg">
                        About
                    </a>
                    <a href="/contact" className="text-lg">
                        Contact
                    </a>
                </div>
                <div className="flex flex-col gap-1 text-end">
                    <a href="tel:26876705039" className="text-lg">
                        +268 7670 5039
                    </a>
                    <a href="mailto:nubakes@gmail.com" className="text-lg">
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
            <p className="py-4 text-center italic uppercase text-xs font-bold border-t border-indigo-950">
                Built with care by{" "}
                <a
                    href="https://lamperosmedia.com"
                    target="_blank"
                    className="text-blue-700"
                >
                    {" "}
                    Lamperos Media
                </a>
            </p>
        </div>
    );
}
