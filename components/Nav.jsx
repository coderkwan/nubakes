export default function () {
    return (
        <div>
            <div className="py-4 max-w-[1240px] mx-auto flex justify-between items-center">
                <a href="/" className="text-lg font-extrabold">
                    nubakes
                </a>
                <div className="flex items-center gap-8">
                    <a href="/products" className="text-md">
                        Products
                    </a>
                    <a href="/about" className="text-md">
                        About
                    </a>
                    <a href="/contact" className="text-md">
                        Contact
                    </a>
                </div>
                <a
                    href="/cart"
                    className="bg-black rounded-lg px-8 py-2 text-white"
                >
                    Basket
                </a>
            </div>
        </div>
    );
}
