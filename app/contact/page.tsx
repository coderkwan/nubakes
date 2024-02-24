import Image from "next/image";
import MapContainer from "../../components/Map";
export const metadata = {
    title: "About us",
};

export default function () {
    const location = {
        lat: 37.7749, // Replace with your desired latitude
        lng: -122.4194, // Replace with your desired longitude
    };

    return (
        <div>
            <section className="py-[8rem] px-7">
                <div className="max-w-[1240px] mx-auto flex flex-col items-center lg:items-start lg:flex-row gap-5 ">
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-4">
                        <h1 className="text-5xl font-extrabold leading-[4rem] ">
                            Contact Us
                        </h1>
                        <form
                            action=""
                            className="flex flex-col gap-2 w-full max-w-[500px]"
                        >
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    className="p-3 rounded-lg border"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Email</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="john@doe.com"
                                    className="p-3 rounded-lg border"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Phone Number</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="7670 5039"
                                    className="p-3 rounded-lg border"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Message</label>
                                <textarea
                                    required
                                    placeholder="John Doe"
                                    className="p-3 rounded-lg border"
                                ></textarea>
                            </div>
                            <button className="p-3 text-white uppercase border bg-black rounded-lg">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                        <div className="flex lg:justify-end gap-9">
                            <div className="flex flex-col lg:text-end">
                                <a href="tel:26876705039" className="text-lg">
                                    +268 7670 5039
                                </a>
                                <a
                                    href="mailto:nubakes@gmail.com"
                                    className="text-lg"
                                >
                                    nubakes@gmail.com
                                </a>
                            </div>
                            <div className="flex flex-col lg:text-end">
                                <p className="text-lg">Farview North</p>
                                <p className="text-lg">Manzini, eSwatini</p>
                            </div>
                        </div>
                        <div className="mt-5 rounded-2xl overflow-hidden h-[400px] border-4 border-gray-400">
                            <MapContainer location={location} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
