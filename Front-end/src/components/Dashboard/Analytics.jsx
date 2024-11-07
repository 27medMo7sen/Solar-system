import { useState } from "react";
import ProductView from "./Overview/Charts/ProductView";
import SalesChart from "./Overview/Charts/SalesChart";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Analytics = () => {
    const [analytics] = useState([
        {
            product: "Solar Panel Installation",
            views: "150",
            sales: "6150$",
            rating: "3.5",
        },
        { product: "Inverter", views: "150", sales: "6150$", rating: "3" },
        { product: "Batteries", views: "150", sales: "6150$", rating: "4.5" },
        { product: "Panels", views: "150", sales: "6150$", rating: "5" },
        {
            product: "Solar Panel Installation",
            views: "150",
            sales: "6150$",
            rating: "2",
        },
    ]);
    return (
        <div className="p-5 py-5 bg-gray-50 w-full">
            <h2 className="font-bold text-2xl mb-4">Analytics</h2>
            <div className="flex justify-between space-x-5 mx-lg:flex-col mx-lg:space-y-5 py-5">
                <div>
                    <SalesChart />
                </div>
                <div>
                    <ProductView />
                </div>
            </div>
            <h2 className="font-bold text-2xl pt-4 mb-4">
                Performance by Product/Services
            </h2>
            <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden py-5">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="p-4">Product/Service</th>
                        <th className="p-4">Views</th>
                        <th className="p-4">Sales</th>
                        <th className="p-4">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {analytics.map((product) => (
                        <tr key={product.id} className="border-b">
                            <td className="p-4">{product.product}</td>
                            <td className="p-4">{product.views}</td>
                            <td className="p-4">{product.sales}</td>
                            <td className="p-4">{product.rating}</td>
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
    );
};

export default Analytics;
