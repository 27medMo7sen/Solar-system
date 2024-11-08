import  { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineAdd } from "react-icons/md";

const Payments = () => {
    const [cards] = useState([
        { id: 1, type: 'MasterCard', number: '**** **** **** 1234', default: true, expired: false },
        { id: 2, type: 'Visa', number: '**** **** **** 1234', default: false, expired: true },
        { id: 3, type: 'Visa', number: '**** **** **** 1234', default: false, expired: false },
    ]);

    const [payouts] = useState([
        { date: '24/11/2024', amount: '#1443', status: 'Completed' },
        { date: '24/11/2024', amount: '#1443', status: 'Completed' },
        { date: '24/11/2024', amount: '#1443', status: 'Completed' },
        { date: '24/11/2024', amount: '#1443', status: 'Completed' },
        { date: '24/11/2024', amount: '#1443', status: 'Completed' },
        { date: '24/11/2024', amount: '#1443', status: 'Completed' },
        { date: '24/11/2024', amount: '#1443', status: 'Completed' },
        { date: '24/11/2024', amount: '#1443', status: 'Completed' },
        { date: '24/11/2024', amount: '#1443', status: 'Completed' },
    ]);

    const getStatusStyle = (status) => {
        return status === 'Completed' ? 'bg-green-400 text-white' : 'bg-gray-500 text-white';
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen w-[1200px]">
            <h2 className="text-3xl font-bold mb-6">Payment Information</h2>
            <div className="flex justify-between items-center mb-6  ">
                <h3 className="text-xl font-semibold">Payment Methods</h3>
                <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded">
                    <MdOutlineAdd className="mr-2" /> Add New Card
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8 bg-white p-4 rounded-md shadow-md">
                {cards.map((card) => (
                    <div key={card.id} className="border rounded-md p-4 flex items-center justify-between">
                        <div>
                            <p className="text-lg font-semibold">{card.type}</p>
                            <p className="text-gray-600">{card.number}</p>
                            {card.default && (
                                <span className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded-full mt-2 inline-block">Default</span>
                            )}
                            {card.expired && (
                                <span className="text-sm bg-red-500 text-white px-2 py-1 rounded-full mt-2 inline-block">Expired</span>
                            )}
                        </div>
                        <button className="text-gray-500">
                            <FiEdit2 size={20} />
                        </button>
                    </div>
                ))}
            </div>

            {/* Payout History Section */}
            <h3 className="text-xl font-semibold mb-4">Payout History</h3>
            <div className="flex items-center gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Search payout"
                    className="border border-gray-300 rounded-md px-4 py-2 w-1/3"
                />
                <select className="border border-gray-300 rounded-md px-4 py-2">
                    <option>All</option>
                    {/* Add other filter options here */}
                </select>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border rounded-md">
                    <thead>
                        <tr className="border-b">
                            <th className="p-4 text-left">Payout Date</th>
                            <th className="p-4 text-left">Amount</th>
                            <th className="p-4 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payouts.map((payout, index) => (
                            <tr key={index} className="border-b">
                                <td className="p-4">{payout.date}</td>
                                <td className="p-4">{payout.amount}</td>
                                <td className="p-4">
                                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${getStatusStyle(payout.status)}`}>
                                        {payout.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center items-center mt-6">
                <button className="p-2 text-gray-600"><FaArrowLeft /></button>
                <span className="px-4">1/5</span>
                <button className="p-2 text-gray-600"><FaArrowRight /></button>
            </div>
        </div>
    );
};

export default Payments;
