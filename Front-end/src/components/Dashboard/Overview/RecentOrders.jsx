
const orders = [
    { id: '#2154', customer: 'Ahmed Ali', service: 'Solar Panel Installation', amount: '650$', date: '24/12/2024' },
    { id: '#2154', customer: 'Ahmed Ali', service: 'Solar Panel Installation', amount: '650$', date: '24/12/2024' },
    { id: '#2154', customer: 'Ahmed Ali', service: 'Solar Panel Installation', amount: '650$', date: '24/12/2024' },
];

const RecentOrders = () => {
    return (
        <>
        <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
        <div className="p-6 bg-gray-50 w-full rounded-lg shadow-md">
            <div className="overflow-hidden border border-gray-200 rounded-lg shadow-md bg-white">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-3 px-4 text-left font-medium text-gray-600">Order Id</th>
                            <th className="py-3 px-4 text-left font-medium text-gray-600">Customer</th>
                            <th className="py-3 px-4 text-left font-medium text-gray-600">Service</th>
                            <th className="py-3 px-4 text-left font-medium text-gray-600">Amount</th>
                            <th className="py-3 px-4 text-left font-medium text-gray-600">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index} className="border-t">
                                <td className="py-3 px-4 text-gray-700">{order.id}</td>
                                <td className="py-3 px-4 text-gray-700">{order.customer}</td>
                                <td className="py-3 px-4 text-gray-700">{order.service}</td>
                                <td className="py-3 px-4 text-gray-700">{order.amount}</td>
                                <td className="py-3 px-4 text-gray-700">{order.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};

export default RecentOrders;
