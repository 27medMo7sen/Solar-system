import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { partners } from "../../Data";

const PartnerSection = () => {
    return (
        <div className="bg-white py-10">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Our Partners</h2>
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    slidesPerView={3}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                >
                    {partners.map((partner) => (
                        <SwiperSlide key={partner.id}>
                            <div className="flex flex-col items-center justify-center">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-28 w-32 rounded-md mb-4"
                                />
                                <p className="text-lg font-medium">{partner.name}</p>

                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
export default PartnerSection;
