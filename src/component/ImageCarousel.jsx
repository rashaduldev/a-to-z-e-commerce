
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
        <SwiperSlide><img src="https://dollarsprout.com/wp-content/uploads/2023/07/sell-phone-online.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://mobilegoo.shop/cdn/shop/articles/WhatsApp_Image_2023-05-31_at_11.42.00_AM.jpg?v=1685783166" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://api.ovantica.com/prisma/ovanticainventory/images/sell/sellbanner/sellmob-banner3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIXq8dse6UOrzokzzEhz90IrHrIx8AnkyXWw&s " alt="" /></SwiperSlide>
      </Swiper>
  );
}
