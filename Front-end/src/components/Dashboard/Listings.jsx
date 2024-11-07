import  { useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Listings = () => {
    const [products] = useState([
        { id: 1, name: 'Solar Panel Installation', category: 'Solar Panel Installation', price: '150$', status: 'Active' },
        { id: 2, name: 'Solar Panel Installation', category: 'Solar Panel Installation', price: '150$', status: 'In Active' },
        { id: 3, name: 'Solar Panel Installation', category: 'Solar Panel Installation', price: '150$', status: 'In Stock' },
        { id: 4, name: 'Solar Panel Installation', category: 'Solar Panel Installation', price: '150$', status: 'Out of stock' },
        { id: 5, name: 'Solar Panel Installation', category: 'Solar Panel Installation', price: '150$', status: 'Active' },
        { id: 6, name: 'Solar Panel Installation', category: 'Solar Panel Installation', price: '150$', status: 'In Active' },
        { id: 7, name: 'Solar Panel Installation', category: 'Solar Panel Installation', price: '150$', status: 'In Stock' },
        { id: 8, name: 'Solar Panel Installation', category: 'Solar Panel Installation', price: '150$', status: 'Out of stock' },
        { id: 9, name: 'Solar Panel Installation', category: 'Solar Panel Installation', price: '150$', status: 'Out of stock' },
        { id: 10, name: 'Solar Panel Installation', category: 'Solar Panel Installation', price: '150$', status: 'Active' },
        { id: 11, name: 'Solar Panel Installation', category: 'Solar Panel Installation', price: '150$', status: 'In Active' },
        { id: 12, name: 'Solar Panel Installation', category: 'Solar Panel Installation', price: '150$', status: 'In Stock' },
        { id: 13, name: 'Solar Panel Installation', category: 'Solar Panel Installation', price: '150$', status: 'Out of stock' },]);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Active':
                return 'bg-blue-500';
            case 'In Active':
                return 'bg-red-500';
            case 'In Stock':
                return 'bg-blue-500';
            case 'Out of stock':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen w-[1200px]">
            <div className="w-full mx-auto">
                <h2 className="text-2xl font-bold mb-4">Best Selling Product</h2>
                <div className="flex items-center justify-between mb-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded px-4 py-2 w-1/3"
                    />
                    <button className="bg-orange-500 text-white px-6 py-2 rounded">Add Product</button>
                </div>
                <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="p-4">Product/Service</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Price</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b">
                                <td className="p-4">{product.name}</td>
                                <td className="p-4">{product.category}</td>
                                <td className="p-4">{product.price}</td>
                                <td className="p-4">
                                    <span
                                        className={`text-white text-sm px-3 py-1 w-24 inline-block text-center rounded ${getStatusColor(
                                            product.status
                                        )}`}
                                    >
                                        {product.status}
                                    </span>
                                </td>
                                <td className="p-4 flex space-x-4">
                                    <button className="text-blue-500 hover:text-blue-700 flex items-center"><FiEdit/>Edit</button>
                                    <button className="text-red-500 hover:text-red-700 flex items-center"><RiDeleteBin6Line />Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-center items-center mt-6">
                    <button className="p-2 text-gray-600 "><FaArrowLeft /></button>
                    <span className='px-4'>1/5</span>
                    <button className="p-2 text-gray-600"><FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default Listings;

