import Image from "next/image";
import pund from "../public/poundcake.jpg";

export default function () {
    return (
        <div className="bg-[#FFDDAB] p-3 border rounded-xl flex items-center justify-between gap-2 w-full max-w-[450px]">
            <div className="border-2 border-gray-400 overflow-hidden rounded-md h-[100px] w-[100px] relative">
                <Image src={pund} fill={true} objectFit="cover" alt="image" />
            </div>
            <div>
                <h4 className="text-xl font-bold">Rosemerry cake</h4>
                <p className="text-lg">R 34,56</p>
            </div>
            <button className="p-2 rounded-md bg-rose-500 text-white cursor-pointer hover:opacity-75 transition-all duration-200">
                Remove
            </button>
        </div>
    );
}
