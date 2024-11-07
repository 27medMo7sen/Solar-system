import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const data = [
    {
        name: "Jan",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Feb",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: "Mars",
        uv: 2000,
        pv: 9000,
        amt: 2290,
    },
    {
        name: "Apr",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "May",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "June",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "July",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: "Aug",
        uv: 3490,
        pv: 3600,
        amt: 2100,
    },
    {
        name: "Sep",
        uv: 3490,
        pv: 3200,
        amt: 2100,
    },
    {
        name: "Oct",
        uv: 3490,
        pv: 9300,
        amt: 2100,
    },
    {
        name: "Nov",
        uv: 3490,
        pv: 2200,
        amt: 2100,
    },
    {
        name: "Dec",
        uv: 3490,
        pv: 4500,
        amt: 2100,
    },
];
const ProductView = () => {
    return (
        <div className="bg-white p-4  h-[400px] rounded-lg shadow-md">
            <h3 className="mb-5 text-2xl font-bold ml-10">Product View</h3>
            <LineChart width={550} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#FFA500"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </div>
    );
};
export default ProductView;
