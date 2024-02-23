export default function ({ data }) {
    return (
        <div className="p-5 border-2 border-indigo-950 rounded-xl flex flex-col items-center text-center gap-2 w-full max-w-[400px]">
            <div className="border-2 bg-gray-500 rounded-full overflow-hidden h-[50px] w-[50px] relative"></div>
            <div>
                <h4 className="text-xl font-bold">{data.fullName}</h4>
                <p className="text-sm italic">{data.location}</p>
            </div>
            <p>{data.testimony}</p>
        </div>
    );
}
