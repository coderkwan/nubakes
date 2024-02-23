import Image from "next/image";
import Product from "../components/Product";
import Testimony from "../components/Testimony";
import { sql } from "@vercel/postgres";
import { url } from "inspector";

export default async function () {
    const testimonials = [
        {
            fullName: "Kwenziwe Masilela",
            location: "Sihlangwini, Sithobela",
            testimony:
                "Absolutely divine! Your chocolate cake is a slice of heaven. The moist texture and rich flavor left me craving for more. Kudos to your talented bakers!",
        },
        {
            fullName: "Nokwanda Phiri",
            location: "Manzini, Fairview",
            testimony:
                "I ordered a batch of vanilla cupcakes for a special occasion, and they were a hit! Light, fluffy, and the frosting was the perfect balance of sweetness. I'll be a repeat customer for sure.",
        },
        {
            fullName: "Renelwe Mjekula",
            location: "Mpolonjeni, Mbabane",
            testimony:
                "The cheesecake was a showstopper at our family gathering. Creamy and luscious, it disappeared in no time. Everyone wanted seconds! Your baking skills are truly impressive.",
        },
        {
            fullName: "Hlanganani Dlamini",
            location: "Kakhoza, Manzini",
            testimony:
                "The cinnamon rolls were a breakfast delight! Warm, gooey, and packed with cinnamon goodness. It felt like a homemade treat from grandma's kitchen. I'll be back for more treats soon!",
        },
    ];

    const { rows } = await sql`SELECT * FROM products LIMIT 3`;
    return (
        <main>
            <section
                className="py-[12rem] bg-gray-300 bg-cover bg-no-repeat bg-center "
                style={{ backgroundImage: "url('/crums.png')" }}
            >
                <div className="max-w-[1240px] mx-auto flex gap-8 items-center">
                    <div className="w-1/2">
                        <h1 className="text-[4rem] font-extrabold leading-[4rem] ">
                            Taste that you will never forget!
                        </h1>
                        <p className="text-2xl mt-4 mb-8">
                            We make sure that you get more flavor and taste than
                            you even thought!
                        </p>
                        <div className="flex gap-8 items-center">
                            <a
                                href="/cart"
                                className="bg-orange-500 py-3 px-8 rounded-lg text-white cursor-pointer hover:opacity-75 transition-all duration-200 text-lg uppercase"
                            >
                                Order Now
                            </a>
                            <a
                                href="/contact"
                                className="border border-indigo-950 py-3 px-8 rounded-lg cursor-pointer hover:opacity-75 transition-all duration-200 text-lg uppercase "
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-center">
                        <div className="relative w-[500px] h-[500px] border-4 border-orange-500 rounded rounded-bl-[9rem]  overflow-hidden">
                            <Image
                                src="/poundcake.jpg"
                                fill={true}
                                objectFit="cover"
                                alt="Cake"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-[10rem] ">
                <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-5 ">
                    <h2 className="text-7xl font-bold text-center">
                        Featured Products
                    </h2>
                    <p className="text-xl text-center">
                        This are our most popular products which are customers
                        love.
                    </p>
                    <div className="my-3 flex gap-[5rem] justify-center w-full">
                        {rows.map((item, index) => {
                            return <Product key={index} data={item} />;
                        })}
                    </div>
                    <a
                        href="/products"
                        className="py-3 bg-orange-500 rounded-lg px-[2rem] font-bold mt-[2rem] uppercase hover:opacity-75 transition-all duration-200"
                    >
                        View All Products
                    </a>
                </div>
            </section>
            <section className="py-[10rem] bg-gray-300">
                <div className="max-w-[1240px] mx-auto flex gap-8 ">
                    <div className="w-1/2 flex justify-center">
                        <div className="relative w-[400px] h-[400px] border-4 border-black rounded-tl-[9rem]  overflow-hidden">
                            <Image
                                src="/spice.jpg"
                                fill={true}
                                objectFit="cover"
                                alt="Cake"
                            />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-6xl font-extrabold leading-[4rem] ">
                            Why choose us?
                        </h2>
                        <p className="text-2xl mt-4 mb-8">
                            We have been serving our clients since 2010, which
                            means we have expertise. We have catered for
                            parties, weddings, dinners and non-events. You can
                            trust us.
                        </p>
                        <div className="flex gap-8 items-center">
                            <div className="text-center bg-black py-3 px-8 rounded-lg text-orange-500 hover:opacity-75 transition-all duration-200 text-lg uppercase">
                                <h5 className="text-4xl">+243</h5>
                                <p>Happy customers</p>
                            </div>
                            <div className="text-center bg-black py-3 px-8 rounded-lg text-orange-500 hover:opacity-75 transition-all duration-200 text-lg uppercase">
                                <h5 className="text-4xl">+1322</h5>
                                <p>Products sold</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-[8rem] ">
                <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-5 ">
                    <h2 className="text-7xl font-bold text-center">
                        What our Customers say?
                    </h2>
                    <p className="text-xl text-center">
                        Here it directly from the fans of our flavor.
                    </p>
                    <div className="my-3 flex gap-[2rem] justify-center w-full flex-wrap">
                        {testimonials.map((item, index) => {
                            return <Testimony key={index} data={item} />;
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
