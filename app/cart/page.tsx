import CartProduct from "../../components/CartProduct";
export const metadata = {
    title: "About us",
};

export default function () {
    const nums = [];

    return (
        <div>
            <section className="py-[8rem] ">
                <div className="max-w-[1240px] mx-auto flex gap-5 ">
                    <div className="w-1/2">
                        <div className="flex flex-col gap-4">
                            {nums.length > 0 ? (
                                nums.map((item, index) => {
                                    return <CartProduct key={index} />;
                                })
                            ) : (
                                <div className="flex flex-col gap-5">
                                    <p>No products selected</p>
                                    <a
                                        href="/products"
                                        className="py-3 px-6 bg-[#FFDDAB] rounded-lg w-fit uppercase font-bold text-gray-800 cursor-pointer hover:opacity-75 transition-all duration-200"
                                    >
                                        Browse Products
                                    </a>
                                    <p className="text-xl max-w-[500px]">
                                        You can submit an order without
                                        selecting product. We will contact you
                                        for details
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col gap-4">
                        <div className="text-lg  bg-[#FFDDAB] rounded-lg max-w-[500px] p-3">
                            We will contact you about your order, delivery and
                            payment.
                        </div>
                        <form
                            action=""
                            className="flex flex-col gap-2 max-w-[500px]"
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
                                Send Order
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
