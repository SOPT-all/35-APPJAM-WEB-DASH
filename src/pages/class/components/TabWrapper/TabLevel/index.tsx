import Card from '@/pages/class/components/Card';
import { questionStyle, recommendClassStyle } from '@/pages/class/components/TabWrapper/TabLevel/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import { IcLevelStarter, IcClose, IcQuesitonmark } from '@/assets/svg';
//import { LESSON_DATA } from '@/pages/class/mocks/mockLessonData';
import { levelMapping, LEVEL } from '@/constants/index';
import { LessonDetail } from "@/apis/class/axios";

//type LessonLevelType = '입문' | '초급' | '중급' | '고급';

const TabLevel = ({ lessonData }: { lessonData: LessonDetail }) => {
  const { level, recommendation } = lessonData;

  // 1. 레벨을 영어에서 한국어로 변환
  const translatedLevel = levelMapping[level] || level; // levelMapping으로 레벨을 한국어로 변환

  // 2. LEVEL 배열에서 해당 한국어 레벨에 맞는 데이터를 찾기
  const levelData = LEVEL.find((item) => item.title === translatedLevel);

  return (
    <Flex direction="column" gap="3.6rem">
      <Flex width="100%" align="flexEnd" direction="column" gap="0.6rem">
        <Card>
          <Flex gap="0.8rem" align="center">
            {levelData?.icon || <IcLevelStarter width={'3.6rem'} />}
            <Head level="h6" tag="h6">
              {translatedLevel}
            </Head>
            <Text tag="b8" color="gray8">
              {levelData?.description}
            </Text>
          </Flex>
        </Card>
        <Flex justify="flexEnd" align="center" gap="0.6rem">
          <Text tag="c3" color="gray7">
            클래스 난이도는 이렇게 설정되어있어요!
          </Text>
          <button className={questionStyle}>
            <IcQuesitonmark width={'1.4rem'} />
          </button>
        </Flex>
      </Flex>
      <Flex direction="column" gap="1.2rem">
        <Flex justify="flexStart" align="center" gap="0.8rem">
          <IcClose width={'2.4rem'} />
          <Head level="h5" tag="h6">
            이런 분들에게 해당 클래스를 추천해요!
          </Head>
        </Flex>

        <Text tag="b3" color="gray8" className={recommendClassStyle}>
          {recommendation}
        </Text>
      </Flex>
    </Flex>
  );
};

export default TabLevel;
