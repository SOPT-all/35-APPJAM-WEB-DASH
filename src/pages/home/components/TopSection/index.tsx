import { useNavigate } from 'react-router-dom';
import * as styles from '@/pages/home/components/TopSection/index.css';
import Divider from '@/components/Divider';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Tag from '@/components/Tag';
import Text from '@/components/Text';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { IcClose, IcArrowRightGray0614, IcCalendarcheckColor3D24, IcCalendarcheckMono3D24 } from '@/assets/svg';
import { MyPageProps } from '@/types/myPageTypes';

interface TopSectionProps {
  userData: MyPageProps;
  onClose: () => void;
}
const TopSection = ({ userData, onClose }: TopSectionProps) => {
  const navigate = useNavigate();

  // 신청 내역, 내 클래스 클릭 시 이동
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  // 강사 권한을 가질 때는 null 이 아닌 number가 옴
  const isInstructor = userData.lessonCount !== null;

  // 신청 내역, 관심목록, 내 클래스 값이 0 이상일 때 gray8 색상 적용
  const getTextColor = (value: number) => {
    return value > 0 ? 'gray8' : 'gray4';
  };

  const renderTagContent = (isInstructor: boolean) => {
    const CalendarIcon = isInstructor ? IcCalendarcheckColor3D24 : IcCalendarcheckMono3D24;

    return (
      <>
        <CalendarIcon width={24} height={24} />
        {isInstructor ? '클래스 개설 가능' : '클래스 개설 불가'}
      </>
    );
  };

  return (
    <section className={styles.sectionStyle}>
      <Flex direction="column" align="center">
        <Flex align="center" width="100%" justify="spaceBetween">
          <IcClose width={24} height={24} onClick={onClose} />
          <Flex align="center" gap="0.2rem">
            <Text tag="b7" color="gray7">
              프로필 수정
            </Text>
            <IcArrowRightGray0614 width={14} height={14} onClick={onClose} />
          </Flex>
        </Flex>

        {/* 프로필 이미지, 닉네임 */}
        <img src={userData.profileImageUrl} alt="프로필 이미지" className={styles.profileImageStyle} />
        <Head level="h1" tag="h2">
          BADALEE
        </Head>

        {/* 권한 확인할 수 있는 태그 */}
        <Flex marginTop="1.2rem" gap="0.8rem">
          <Tag hasAuth={true} size="mypage">
            <IcCalendarcheckColor3D24 width={24} height={24} />
            클래스 신청 가능
          </Tag>
          <Tag hasAuth={isInstructor} size="mypage">
            {renderTagContent(isInstructor)}
          </Tag>
        </Flex>
      </Flex>

      <Flex paddingTop="2.4rem" paddingLeft="3.2rem" paddingRight="3.2rem" gap="2.1rem">
        <Flex align="center" onClick={() => handleNavigate(ROUTES_CONFIG.mypageReservation.path)}>
          <Flex direction="column" align="center" gap="0.5rem">
            <Head tag="h4" color={getTextColor(userData.reservationCount)}>
              {userData.reservationCount}
            </Head>
            <Text tag="b6" color={getTextColor(userData.reservationCount)}>
              신청내역
            </Text>
          </Flex>
        </Flex>

        <Divider direction="vertical" color="gray2" length={32} thickness={1} />

        <Flex direction="column" align="center" gap="0.5rem">
          <Head tag="h4" color={getTextColor(userData.favoriteCount)}>
            {userData.favoriteCount}
          </Head>
          <Text tag="b6" color={getTextColor(userData.favoriteCount)}>
            관심목록
          </Text>
        </Flex>

        <Divider direction="vertical" color="gray2" length={32} thickness={1} />

        <Flex
          gap="0.5rem"
          direction="column"
          align="center"
          onClick={() => handleNavigate(ROUTES_CONFIG.instructorClassList.path)}>
          <Head tag="h4" color={getTextColor(userData.lessonCount ?? 0)}>
            {userData.lessonCount ?? 0}
          </Head>
          <Text tag="b6" color={getTextColor(userData.lessonCount ?? 0)}>
            내 클래스
          </Text>
        </Flex>
      </Flex>
    </section>
  );
};

export default TopSection;
