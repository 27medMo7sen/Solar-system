
const products = [
    {
        service: 'Solar Panel Installation',
        sales: 150,
        revenue: '6500$',
        performance: 0.7,
    },
    {
        service: 'Solar Panel Installation',
        sales: 150,
        revenue: '6500$',
        performance: 0.7,
    },
    {
        service: 'Solar Panel Installation',
        sales: 150,
        revenue: '6500$',
        performance: 0.7,
    },
    {
        service: 'Solar Panel Installation',
        sales: 150,
        revenue: '6500$',
        performance: 0.7,
    },
];

const PerformanceBar = ({ percentage }) => (
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
            className="bg-orange-500 h-full"
            style={{ width: `${percentage * 100}%` }}
        ></div>
    </div>
);

const BestSelling = () => (
    <>
        <h2 className="text-2xl font-bold mb-4">Best Selling Product</h2>
        <div className="w-full mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
            <div className="overflow-x-auto">
                <table className="w-full bg-white border-collapse rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="px-4 py-2 text-left">Product/Service</th>
                            <th className="px-4 py-2 text-left">Sales</th>
                            <th className="px-4 py-2 text-left">Revenue</th>
                            <th className="px-4 py-2 text-left">Performance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-4 py-3">{product.service}</td>
                                <td className="px-4 py-3">{product.sales}</td>
                                <td className="px-4 py-3">{product.revenue}</td>
                                <td className="px-4 py-3">
                                    <PerformanceBar percentage={product.performance} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
);

export default BestSelling;
