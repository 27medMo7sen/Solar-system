import { useState } from 'react';
import { FiEye } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Orders = () => {
    const [orders] = useState([
        { id: '#1443', customer: 'Ahmed Ali', product: 'Solar Panel Installation', status: 'In Progress', date: '24/11/2024' },
        { id: '#1443', customer: 'Ahmed Ali', product: 'Solar Panel Installation', status: 'Completed', date: '24/11/2024' },
        { id: '#1443', customer: 'Ahmed Ali', product: 'Solar Panel Installation', status: 'Canceled', date: '24/11/2024' },
        { id: '#1443', customer: 'Ahmed Ali', product: 'Solar Panel Installation', status: 'Pending', date: '24/11/2024' },
        { id: '#1443', customer: 'Ahmed Ali', product: 'Solar Panel Installation', status: 'In Progress', date: '24/11/2024' },
        { id: '#1443', customer: 'Ahmed Ali', product: 'Solar Panel Installation', status: 'Pending', date: '24/11/2024' },
        { id: '#1443', customer: 'Ahmed Ali', product: 'Solar Panel Installation', status: 'Completed', date: '24/11/2024' },
        { id: '#1443', customer: 'Ahmed Ali', product: 'Solar Panel Installation', status: 'Canceled', date: '24/11/2024' },
        { id: '#1443', customer: 'Ahmed Ali', product: 'Solar Panel Installation', status: 'In Progress', date: '24/11/2024' },
        { id: '#1443', customer: 'Ahmed Ali', product: 'Solar Panel Installation', status: 'Completed', date: '24/11/2024' },
        { id: '#1443', customer: 'Ahmed Ali', product: 'Solar Panel Installation', status: 'Canceled', date: '24/11/2024' },
        { id: '#1443', customer: 'Ahmed Ali', product: 'Solar Panel Installation', status: 'Pending', date: '24/11/2024' },
        { id: '#1443', customer: 'Ahmed Ali', product: 'Solar Panel Installation', status: 'In Progress', date: '24/11/2024' },
        { id: '#1443', customer: 'Ahmed Ali', product: 'Solar Panel Installation', status: 'Pending', date: '24/11/2024' },
        { id: '#1443', customer: 'Ahmed Ali', product: 'Solar Panel Installation', status: 'Completed', date: '24/11/2024' },
        { id: '#1443', customer: 'Ahmed Ali', product: 'Solar Panel Installation', status: 'Canceled', date: '24/11/2024' },
    ]);

    const getStatusStyle = (status) => {
        switch (status) {
            case 'In Progress':
                return 'bg-blue-500 text-white';
            case 'Completed':
                return 'bg-green-400 text-white';
            case 'Canceled':
                return 'bg-red-400 text-white';
            case 'Pending':
                return 'bg-gray-200 text-gray-700';
            default:
                return 'bg-gray-500 text-white';
        }
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen w-[1200px]">
            <h2 className="text-2xl font-bold mb-6">Order Tracking</h2>
            <div className="flex items-center relative gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search orders"
                    className="border border-gray-300 rounded-md px-4 py-2 w-1/3"
                />
                <div className='absolute right-0 space-x-4'>
                <select className="border border-gray-300 rounded-md px-4 py-2">
                    <option>All Dates</option>
                </select>
                <select className="border border-gray-300 rounded-md px-4 py-2">
                    <option>All Status</option>
                </select>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border rounded-md">
                    <thead>
                        <tr className="border-b">
                            <th className="p-4 text-left">Order Id</th>
                            <th className="p-4 text-left">Customer Name</th>
                            <th className="p-4 text-left">Product/Service</th>
                            <th className="p-4 text-left">Order Status</th>
                            <th className="p-4 text-left">Date</th>
                            <th className="p-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index} className="border-b">
                                <td className="p-4">{order.id}</td>
                                <td className="p-4">{order.customer}</td>
                                <td className="p-4">{order.product}</td>
                                <td className="p-4">
                                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${getStatusStyle(order.status)}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="p-4">{order.date}</td>
                                <td className="p-4 flex items-center space-x-2 text-blue-500">
                                    <FiEye className="mr-1" /> View details
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

export default Orders;
