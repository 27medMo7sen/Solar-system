import BestSelling from "./BestSellingProducts"
import ProductView from "./Charts/ProductView"
import SalesChart from "./Charts/SalesChart"
import QuickActions from "./QuickActions"
import RecentOrders from "./RecentOrders"

const Overview = () => {
    return (
        <div className="p-5 py-5 bg-gray-50 w-full">
            <div className="flex items-center justify-between space-x-6 mb-14 pb-10">
                <div className="bg-white rounded-lg shadow-md w-64 h-44 p-4 font-bold">
                    <h2 className=" text-2xl mb-3">Total Products/
                        Services</h2>
                    <span className="text-5xl">4</span>
                </div>
                <div className="bg-white rounded-lg shadow-md w-64 h-44 p-4 font-bold">
                    <h2 className="text-2xl mb-3">Pending Orders</h2>
                    <span className="text-5xl">3</span>
                </div>
                <div className="bg-Primary-button text-white rounded-lg shadow-md w-64 h-44 p-4 font-bold">
                    <h2 className="text-2xl mb-3">Total Earnings</h2>
                    <span className="text-5xl">2500$</span>
                </div>
                <div className="bg-white rounded-lg shadow-md w-64 h-44 p-4 font-bold">
                    <h2 className="text-2xl mb-3">New Review</h2>
                    <span className="text-5xl">4</span>
                </div>
            </div>
            <div className="flex items-center justify-between relative">
                <h3 className="text-2xl font-bold absolute left-0 mb-3">Overview</h3>
                <select className="rounded absolute right-0 p-2 text-sm text-gray-600 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option>Year</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                </select>
            </div>
            <div className="flex justify-between space-x-5 mx-lg:flex-col mx-lg:space-y-5 py-5">
                <div><SalesChart /></div>
                <div><ProductView /></div>
            </div>
            <div className="py-5">
                <RecentOrders />  
            </div>
            <div className="py-5">
                <BestSelling />
            </div>
            <div className="py-5">
                <QuickActions />
            </div>
        </div>
    )
}

export default Overview
