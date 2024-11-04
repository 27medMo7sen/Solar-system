const Says = () => {
    const partners = [
        {
            name: 'Amazon',
            text: 'Installing solar panels through Solar Easerent has transformed our energy usage. Not only are we saving money, but we also feel great about our reduced environmental footprint. The installation was smooth, and the support from the team has been excellent every step of the way',
            stars: '★★★★★',
        },
        {
            name: 'Solarise',
            text: 'Installing solar panels through Solar Easerent has transformed our energy usage. Not only are we saving money, but we also feel great about our reduced environmental footprint. The installation was smooth, and the support from the team has been excellent every step of the way',
            stars: '★★★★★',
        },
        {
            name: 'Apple',
            text: 'Installing solar panels through Solar Easerent has transformed our energy usage. Not only are we saving money, but we also feel great about our reduced environmental footprint. The installation was smooth, and the support from the team has been excellent every step of the way',
            stars: '★★★★★',
        },
        {
            name: 'Intel',
            text: 'Installing solar panels through Solar Easerent has transformed our energy usage. Not only are we saving money, but we also feel great about our reduced environmental footprint. The installation was smooth, and the support from the team has been excellent every step of the way',
            stars: '★★★★★',
        },
    ]
    return (
        <div className="py-10">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Partners Say</h2>
            <div className="flex justify-center items-center ">
                <div className="grid grid-cols-4 mx-lg:grid-cols-3 mx-sm:grid-cols-1 gap-10 px-4 mx-sm:gap-0">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="rounded-md justify-between items-center flex flex-col mb-10  border-[3px] border-gray-400 p-4"
                        >
                            <div className="">
                                <h3 className="font-bold text-center text-lg">{partner.name}</h3>
                                <div className="text-center">
                                    <span className="text-orange-500 text-lg mr-2">{partner.stars}</span>
                                </div>
                                <p className="font-medium text-center text-sm">{partner.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Says
