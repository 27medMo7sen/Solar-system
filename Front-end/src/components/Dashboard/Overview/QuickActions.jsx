
const QuickActions = () => (
    <>
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="w-full mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-lg font-semibold mb-2">Add New Product</h3>
                    <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-full w-full hover:bg-orange-600">
                        Add Product
                    </button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-lg font-semibold mb-2">View Analytics</h3>
                    <button className="border border-gray-500 text-gray-700 font-semibold py-2 px-4 rounded-full w-full hover:bg-gray-100">
                        Go to Analytics
                    </button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-lg font-semibold mb-2">Manage Orders</h3>
                    <button className="border border-gray-500 text-gray-700 font-semibold py-2 px-4 rounded-full w-full hover:bg-gray-100">
                        View Orders
                    </button>
                </div>
            </div>
        </div>
    </>
);

export default QuickActions;
