import { useNavigate } from 'react-router-dom';
import {
  profileStyle,
  lessonNameStyle,
  cardStyle,
  thunderIconStyle,
} from '@/pages/class/components/ClassInfoWrapper/index.css';
import { LessonDetailApiResponse } from '@/pages/class/types/index';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Tag from '@/components/Tag';
import Text from '@/components/Text';
import { calculateDday } from '@/utils/dateCalculate';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { genreMapping } from '@/constants/index';
import { IcThunderMain0424 } from '@/assets/svg';
import { vars } from '@/styles/theme.css';

const ClassInfoWrapper = ({ lessonData }: { lessonData: LessonDetailApiResponse }) => {
  const {
    genre,
    name,
    teacherId,
    teacherImageUrl,
    teacherNickname,
    lessonRound: { lessonRounds },
    price,
    maxReservationCount,
    reservationCount,
    status,
  } = lessonData;
  const translatedGenre = genreMapping[genre] || genre;

  // 각 회차에 대해 D-Day 계산
  const dDay = status === 'EXPIRED' || status === 'OVER_BOOKED' ? '마감' : calculateDday(lessonRounds[0].startDateTime);

  // 총 가격 계산
  const totalPrice = lessonRounds.length * price;

  // 남은 예약 가능 인원 계산
  const remainingSeats = maxReservationCount - reservationCount;

  const isSoldOut = remainingSeats <= 0;
  const remainingText = isSoldOut ? '마감되었어요' : `${remainingSeats}`;
  const iconColor = isSoldOut ? vars.colors.alert03 : vars.colors.main04;
  const textColor = isSoldOut ? 'alert3' : 'main4';

  const navigate = useNavigate();

  const handleTeacherClick = (dancerId: number) => {
    const path = ROUTES_CONFIG.dancer.path.replace(':id', dancerId.toString());
    navigate(path);
  };

  return (
    <Flex direction="column" paddingTop="2rem" paddingRight="2.4rem" paddingBottom="2.4rem" paddingLeft="2rem">
      <Flex gap="0.4rem" marginBottom="1.2rem">
        <Tag type="genre" size="medium">
          <Text tag="b7" color="white">
            {translatedGenre}
          </Text>
        </Tag>
        <Tag type="deadline" size="medium">
          <Text tag="b7" color="white">
            {dDay}
          </Text>
        </Tag>
      </Flex>

      <Head level="h2" tag="h4" className={lessonNameStyle}>
        {name}
      </Head>

      <Flex align="center" gap="0.8rem" onClick={() => handleTeacherClick(teacherId)}>
        <img src={teacherImageUrl} alt={`${teacherNickname} 프로필`} className={profileStyle} />
        <Text tag="b2" color="gray9">
          {teacherNickname}
        </Text>
      </Flex>

      <Flex justify="flexEnd" width="100%" align="center" gap="0.8rem" marginBottom="1.5rem">
        <Head level="h4" tag="h5" color="gray6">
          {lessonRounds.length}회
        </Head>
        <Flex align="center" gap="0.2rem">
          <Head level="h5" tag="h2">
            {totalPrice.toLocaleString()}
          </Head>
          <Head level="h5" tag="h2">
            원
          </Head>
        </Flex>
      </Flex>

      <div className={cardStyle}>
        <IcThunderMain0424 width={'2.4rem'} color={iconColor} className={thunderIconStyle} />
        <Text tag="b2" color="black">
          {isSoldOut ? '' : '마감까지'}
        </Text>
        <Text tag="b2" color={textColor}>
          {remainingText}
        </Text>
        <Text tag="b2" color="black">
          {isSoldOut ? '' : '명 남았어요!'}
        </Text>
      </div>
    </Flex>
  );
};

export default ClassInfoWrapper;
