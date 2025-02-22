// Import Swiper styles
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderItem from '@/pages/home/components/SliderItem/SliderItem';
import ChoreohongImg from '@/shared/assets/images/image_chorehong.jpeg';
import KkukgirlImg from '@/shared/assets/images/image_kkukgirl.jpg';
import BannerImg from '@/shared/assets/images/img_banner_750.png';

const ADVERTISEMENTS = [
  {
    imageUrl: KkukgirlImg,
    description: `5주 집중 커리큘럼, 스걸파 출연 댄서의 `,
    description2: '피메일 힙합 기본기 튼튼하게 다지기',
    id: 25,
  },
  { imageUrl: ChoreohongImg, description: '코레홍과 함께하는', description2: 'NMIXX-DASH 코레오그래피', id: 24 },
  {
    imageUrl: BannerImg,
    description: '알고 싶던 댄서나 관심있는 클래스를 ',
    description2: '한 눈에 모아볼 수 있어요!',
    id: 0,
  },
];
const HomeCarousel = () => {
  return (
    <Swiper
      loop={true}
      pagination={true}
      speed={500}
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}>
      {ADVERTISEMENTS.map((data, index) => {
        return (
          <SwiperSlide key={`${index}-${data.description}`}>
            <SliderItem
              imageUrl={data.imageUrl}
              description={data.description}
              description2={data.description2}
              id={data.id}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeCarousel;
