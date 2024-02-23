import Image from "next/image";
import pund from "../public/poundcake.jpg";

export default function () {
    return (
        <div className="p-3 border-2 border-orange-500 rounded-xl flex flex-col gap-2 w-full max-w-[300px]">
            <div className="border-2 rounded-md h-[200px] relative">
                <Image src={pund} fill={true} objectFit="cover" alt="image" />
            </div>
            <h4 className="text-xl font-bold">Rosemerry cake</h4>
            <p className="text-lg">R 34,56</p>
            <button className="p-2 rounded-md bg-black text-white cursor-pointer hover:opacity-75 transition-all duration-200">
                Add to Basket
            </button>
        </div>
    );
}
