import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Grid, Pagination, Autoplay, Navigation} from "swiper";
import "../css/carousel.css";
import data from "../static/Carousel";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Carousel() {
    return (
        <>
        <div className="div-carousel-title">
            <h3>Tratamientos</h3>
        </div>
        <div>
            <Swiper
                navigation={true}
                pagination={{clickable: true}}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                grid={{
                    rows: 1,
                }}
                spaceBetween={30}
                slidesPerView={1}
                modules={[Navigation, Pagination, Autoplay, Grid]}
                className="mySwiper"
            >
                {data.map(data =>
                    <SwiperSlide style={{ backgroundImage: `url(${data.image})` }} key={data.image}>
                        <div className="divCarrousel">
                            <span className="carrouselItemName">{data.name}</span>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
        </>
    );
}