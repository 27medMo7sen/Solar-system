import { Users, Sun, Battery, Leaf } from "lucide-react";

const stats = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Sun, label: "Installations", value: "1,000+" },
    { icon: Battery, label: "kWh Generated", value: "2.5M" },
    { icon: Leaf, label: "CO₂ Reduced", value: "1,200 tons" },
];

const About = () => {
    return (
        <section
            className="py-24 bg-gradient-to-t from-green-300 to-white relative overflow-hidden"
            id="about"
        >
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-radial from-green-400 to-transparent"></div>
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center leading-tight shadow-sm">
                    About <span className="text-green-600">Solar Ease</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-gray-700">
                        <p className="text-lg leading-relaxed font-medium">
                            Founded in 2024, Solar Ease is on a mission to transform the way
                            Egyptians adopt renewable energy. As a trusted platform, we
                            connect homes and businesses with the finest solar energy
                            providers, making clean energy accessible, transparent, and
                            efficient.
                        </p>
                        <p className="text-lg leading-relaxed font-medium">
                            We believe in a greener, more sustainable future. By bridging the
                            gap between affordability and technology, Solar Ease empowers
                            customers to embrace solar energy with confidence.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="p-6 bg-white rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl"
                            >
                                <stat.icon
                                    className="w-10 h-10 text-green-600 mb-4 animate-bounce"
                                    aria-hidden="true"
                                />
                                <div className="text-4xl font-bold text-gray-900 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
