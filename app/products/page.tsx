import Product from "../../components/Product";
import { sql } from "@vercel/postgres";
export const metadata = {
    title: "Products",
};

export default async function () {
    const { rows } = await sql`SELECT * FROM products`;
    return (
        <div>
            <section className="py-[8rem]">
                <div className="max-w-[1240px] mx-auto gap-5">
                    <div className="flex justify-between gap-6 mb-[3rem] bg-gray-200 rounded-lg p-8">
                        <form action="" className="w-1/3">
                            <div className="flex flex-col gap-3">
                                <label htmlFor="" className="text-lg">
                                    Sort By
                                </label>
                                <select
                                    name="sort"
                                    className="p-3 rounded-md max-w-[300px]"
                                >
                                    <option value="popularity">
                                        Popularity
                                    </option>
                                    <option value="price">Price</option>
                                </select>
                            </div>
                        </form>
                        <form action="" className="w-1/3">
                            <div className="flex flex-col gap-3">
                                <label htmlFor="" className="text-lg">
                                    Order
                                </label>
                                <select
                                    name="sort"
                                    className="p-3 rounded-md max-w-[300px]"
                                >
                                    <option value="ascending">Ascending</option>
                                    <option value="descending">
                                        Descending
                                    </option>
                                </select>
                            </div>
                        </form>
                        <form action="" className="w-1/3">
                            <div className="flex flex-col gap-3">
                                <label htmlFor="" className="text-lg">
                                    Proce Range
                                </label>
                                <input
                                    type="range"
                                    min={0}
                                    max={1000}
                                    className="p-3 rounded-md max-w-[300px]"
                                />
                            </div>
                        </form>
                    </div>

                    <div className="flex justify-between gap-6 mb-[3rem]">
                        <div className="my-3 flex-wrap flex gap-[5rem] justify-center w-full">
                            {rows.map((item, index) => {
                                return <Product key={index} data={item} />;
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
