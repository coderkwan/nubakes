import Image from "next/image";

export default async function ({ data }) {
    const image =
        "https://t6sxwjrobiyo5qjy.public.blob.vercel-storage.com/" + data.image;

    return (
        <div className="p-3 border-2 border-orange-500 rounded-xl flex flex-col gap-2 w-full max-w-[300px]">
            <div className="border-2 rounded-md h-[200px] relative">
                <Image src={image} fill={true} objectFit="cover" alt="image" />
            </div>
            <h4 className="text-xl font-bold">{data.name}</h4>
            <p className="text-lg">R {data.price}</p>
            <button className="p-2 rounded-md bg-black text-white cursor-pointer hover:opacity-75 transition-all duration-200">
                Add to Basket
            </button>
        </div>
    );
}
