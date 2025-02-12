import * as styles from '@/pages/home/components/MyPage/index.css';
import TopSection from '@/pages/home/components/TopSection';
import { useGetRole } from '@/shared/apis/common/queries';
import { useGetMyPage } from '@/shared/apis/home/queries';
import Divider from '@/shared/components/Divider';
import BottomSection from '../BottomSection';

interface MyPageProps {
  showMyPage: boolean;
  onClose: () => void;
}

const MyPage = ({ showMyPage, onClose }: MyPageProps) => {
  const { data: userData } = useGetMyPage({
    enabled: showMyPage,
  });
  const { data: role } = useGetRole({
    enabled: showMyPage,
  });

  const defaultData = {
    profileImageUrl: '',
    nickname: '',
    reservationCount: 0,
    favoriteCount: 0,
    lessonCount: null,
  };

  const isInstructor = role?.role === 'TEACHER';

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div onClick={handleClickOutside} className={showMyPage ? styles.visibleStyle : styles.invisibleStyle}>
      <div className={styles.wrapperStyle}>
        <TopSection userData={userData || defaultData} onClose={onClose} isInstructor={isInstructor} />
        <Divider length="100%" color="gray1" thickness={8} />
        <BottomSection isInstructor={isInstructor} />
      </div>
    </div>
  );
};

export default MyPage;
