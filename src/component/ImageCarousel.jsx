
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function ImageCarousel() {
  return (
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src="https://i.ibb.co.com/wSPkB87/pagi-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/wSPkB87/pagi-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/wSPkB87/pagi-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/wSPkB87/pagi-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/wSPkB87/pagi-1.jpg" alt="" /></SwiperSlide>
      </Swiper>
  );
}
