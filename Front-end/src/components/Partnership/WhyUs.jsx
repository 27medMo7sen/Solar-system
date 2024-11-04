import settings from "../../assets/settings.png";
import signal from "../../assets/signal.png";
import support from "../../assets/support.png";
const WhyUs = () => {
    const items = [
        {
            text: "With a proven track record in the solar industry, our team brings extensive knowledge and expertise to ensure seamless project execution, from initial consultation to installation and maintenance",
            img: signal,
        },
        {
            text: "We understand that each customer has unique energy needs. Our tailored solar solutions maximize efficiency and savings, ensuring that you get the most out of your investment in renewable energy.em",
            img: settings,
        },
        {
            text: "By partnering with us, you’re not just investing in solar energy; you’re contributing to a greener future. We prioritize sustainable practices and work to minimize our environmental impact, aligning with your values for a better planet.",
            img: support,
        },
    ];
    return (
        <div className="bg-zinc-100 py-10">
            <div className="container mx-auto items-center">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    Why Partner With Us?
                </h2>
                <div className="flex justify-center items-center ">
                    <div className="grid grid-cols-3 mx-lg:grid-cols-2 mx-sm:grid-cols-1 gap-10 px-4 mx-sm:gap-0">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 w-80 mx-md:w-72 p-4 rounded-md justify-center items-center flex flex-col mb-10 "
                            >
                                <div className="bg-white rounded-full p-8 mb-8 shadow-lg ">
                                    <img src={item.img} alt="Image" className="w-36 " />
                                </div>
                                <p className="font-medium text-center text-sm">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button className="px-4 py-2 bg-orange-500 text-white font-bold">
                        Become a Partner
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
