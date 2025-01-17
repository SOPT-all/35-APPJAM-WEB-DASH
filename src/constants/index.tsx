import TabIntro from '@/pages/class/TabWrapper/TabIntro';
import TabLevel from '@/pages/class/TabWrapper/TabLevel';
import TabLocationInfo from '@/pages/class/TabWrapper/TabLocation';
import TabPeriod from '@/pages/class/TabWrapper/TabPeriod';
import TabEducation from '@/pages/dancer/TabWrapper/TabEducation';
import TabHistory from '@/pages/dancer/TabWrapper/TabExperience';
import TabVideo from '@/pages/dancer/TabWrapper/TabVideo';
import { IcLevelAdvanced, IcLevelBasic, IcLevelIntermediate, IcLevelStarter } from '@/assets/svg';

export const LEVEL = [
  {
    icon: <IcLevelStarter width={36} />,
    title: '입문',
    description: '춤에 처음 도전해보는 초보 댄서예요',
  },
  {
    icon: <IcLevelBasic width={36} />,
    title: '초급',
    description: '장르의 기본기를 본격적으로 배우고 싶어요',
  },
  {
    icon: <IcLevelIntermediate width={36} />,
    title: '중급',
    description: '루틴과 함께 배우며 장르의 이해도를 높이고 싶어요',
  },
  {
    icon: <IcLevelAdvanced width={36} />,
    title: '고급',
    description: '한계에 도전하며 나의 무브를 성장시키고 싶어요',
  },
];

export const GENRE_CATEGORY = [
  [
    '힙합',
    '피메일 힙합',
    '팝핑',
    '브레이킹',
    '왁킹',
    '락킹',
    '하우스',
    '보깅',
    '크럼프',
    '소울',
    '코레오그래피',
    'K-POP',
  ],
];

export type StatusType = 'APPLY' | 'COMPLETE' | 'CLOSED';

export const BUTTON_CONFIG: Record<StatusType, { text: string; isDisabled: boolean }> = {
  APPLY: { text: '신청하기', isDisabled: false },
  COMPLETE: { text: '신청 완료', isDisabled: true },
  CLOSED: { text: '클래스 마감', isDisabled: true },
};

export const DANCER_TABS = [
  { id: 1, label: '학력', component: <TabEducation /> },
  { id: 2, label: '경력', component: <TabHistory /> },
  { id: 3, label: '영상', component: <TabVideo /> },
];

export const CLASS_TABS = [
  { id: 1, label: '소개', component: <TabIntro /> },
  { id: 2, label: '난이도', component: <TabLevel /> },
  { id: 3, label: '기간', component: <TabPeriod /> },
  { id: 4, label: '위치', component: <TabLocationInfo /> },
];
