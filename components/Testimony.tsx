import Image from "next/image";
import pund from "../public/poundcake.jpg";

export default function () {
    return (
        <div className="p-5 border-2 border-indigo-950 rounded-xl flex flex-col items-center text-center gap-2 w-full max-w-[400px]">
            <div className="border-2 rounded-full overflow-hidden h-[50px] w-[50px] relative">
                <Image src={pund} fill={true} objectFit="cover" alt="image" />
            </div>
            <div>
                <h4 className="text-xl font-bold">Kwanele Fakudze</h4>
                <p className="text-sm italic">Tubungu Estate</p>
            </div>
            <p>
                “This is by far the best cake i ever tested, you made my
                birthday a special one. I will definitely order more.”
            </p>
        </div>
    );
}
