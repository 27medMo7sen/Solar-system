import { useState } from "react";

const FAQS = () => {
    const faqs = [
        {
            question: "How long does the verification process take?",
            answer: "This is just a dummy text that has been inserted as a placeholder for future content. While it may seem insignificant at first glance, the use of dummy text is a common practice in the design and publishing industry, as it allows designers and developers to visualize the layout and overall aesthetic of a project without being distracted by the actual content.",
        },
        {
            question: "What documents are required for verification?",
            answer: "This is just a dummy text that has been inserted as a placeholder for future content. While it may seem insignificant at first glance, the use of dummy text is a common practice in the design and publishing industry, as it allows designers and developers to visualize the layout and overall aesthetic of a project without being distracted by the actual content.",
        },
        {
            question: "Can I change my verification details later?",
            answer: "This is just a dummy text that has been inserted as a placeholder for future content. While it may seem insignificant at first glance, the use of dummy text is a common practice in the design and publishing industry, as it allows designers and developers to visualize the layout and overall aesthetic of a project without being distracted by the actual content.",
        },
        {
            question: "Is there a fee for verification?",
            answer: "This is just a dummy text that has been inserted as a placeholder for future content. While it may seem insignificant at first glance, the use of dummy text is a common practice in the design and publishing industry, as it allows designers and developers to visualize the layout and overall aesthetic of a project without being distracted by the actual content.",
        },
        {
            question: "Is there a fee for verification?",
            answer: "This is just a dummy text that has been inserted as a placeholder for future content. While it may seem insignificant at first glance, the use of dummy text is a common practice in the design and publishing industry, as it allows designers and developers to visualize the layout and overall aesthetic of a project without being distracted by the actual content.",
        },
    ];
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-10 bg-black text-white flex items-center justify-center mb-4">
            <div className="w-full max-w-7xl p-4">
                <h2 className="text-center text-3xl font-bold mb-8">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-700 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center text-black p-4 text-lg font-bold bg-white focus:outline-none"
                            >
                                <span>{faq.question}</span>
                                <span>{openIndex === index ? "-" : "+"}</span>
                            </button>
                            <div
                                className={`${openIndex === index
                                    ? "max-h-screen opacity-100 delay-3000"
                                    : "max-h-0 opacity-0"
                                    } transition-all duration-500 overflow-hidden text-sm p-4`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-6">
                    <button className="bg-Primary-button text-white py-2 px-4 rounded hover:bg-Primary-button-hover">
                        Ask a Question
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FAQS;
