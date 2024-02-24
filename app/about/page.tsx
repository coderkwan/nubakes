import Image from "next/image";
export const metadata = {
    title: "About us",
};

export default function () {
    return (
        <div>
            <section className="py-[4rem] px-7">
                <div className="max-w-[1240px] bg-gray-950 text-white py-[4rem] rounded mx-auto flex flex-col items-center gap-5 ">
                    <h1 className="text-5xl md:text-7xl font-bold text-orange-500 text-center">
                        About Us
                    </h1>
                </div>
            </section>
            <section className="py-2 px-7">
                <div className="max-w-[1240px] mx-auto ">
                    <h2 className="text-2xl md:text-4xl max-w-[900px]">
                        We have been baking and creating unforgettable flavor
                        since 2013. People love us. you should too.
                    </h2>
                </div>
            </section>
            <section className="py-[8rem] px-7">
                <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row gap-5 ">
                    <div className="w-full md:w-1/2 flex justify-start">
                        <div className="h-[400px] w-full m:w-[500px] rounded-2xl overflow-hidden border-4 border-black relative">
                            <Image
                                src="/poundcake.jpg"
                                fill={true}
                                objectFit="cover"
                                alt="Cake"
                            />
                        </div>
                    </div>
                    <div className="w-full m:w-1/2">
                        <p className="mb-4 text-lg max-w-[550px]">
                            At Nubakes, we believe that great food begins with
                            the finest ingredients. Our talented team of bakers
                            carefully selects premium, locally sourced
                            ingredients to ensure that every treat we create is
                            a delightful experience for your taste buds. From
                            the flakiness of our croissants to the richness of
                            our chocolate cakes, we take pride in the quality
                            and authenticity of our baked goods
                        </p>
                        <p className="mb-4 text-lg max-w-[550px]">
                            Our menu is a carefully curated collection of
                            classic favorites and innovative creations. Whether
                            you're craving a buttery, melt-in-your-mouth pastry
                            with your morning coffee or searching for the
                            perfect cake to mark a special occasion, we have
                            something to satisfy every palate. Gluten-free and
                            vegan options are also available, ensuring that
                            everyone can indulge in the sweet moments we create.
                        </p>
                    </div>
                </div>
            </section>
            <section className="pt-2 mb-[8rem] px-7">
                <div className="max-w-[1240px] mx-auto ">
                    <h3 className="text-3xl max-w-[900px]">
                        Beyond the delectable treats that line our display
                        cases, [Bakery Name] is a place where community and
                        connection thrive. Our cozy and inviting space is the
                        perfect setting to gather with friends, catch up on
                        work, or simply savor a quiet moment of reflection. We
                        are more than just a bakery; we are a cherished
                        destination where memories are made, and friendships are
                        nurtured.
                    </h3>
                </div>
            </section>
        </div>
    );
}
