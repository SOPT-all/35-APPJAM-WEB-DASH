import {
  classImageStyle,
  deadlineTagStyle,
  wrapperStyle,
} from '@/pages/dancer/components/DancerInfo/DancerClassItem/dancerClassItem.css';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import Tag from '@/shared/components/Tag/Tag';
import { genreMapping, levelMapping } from '@/shared/constants/index';

interface DancerClassItemProps {
  lessonImageUrl: string;
  lessonRemainingDays: number;
  lessonGenre: string;
  lessonLevel: string;
  lessonName: string;
}

const DancerClassItem = ({
  lessonImageUrl,
  lessonRemainingDays,
  lessonGenre,
  lessonLevel,
  lessonName,
}: DancerClassItemProps) => {
  const renderDeadlineTag = () => {
    if (lessonRemainingDays < 0) {
      return (
        <Tag type="deadline" size="thumbnail" className={deadlineTagStyle}>
          마감
        </Tag>
      );
    }
    if (lessonRemainingDays == 0) {
      return (
        <Tag type="deadline" size="thumbnail" className={deadlineTagStyle}>
          D-DAY
        </Tag>
      );
    }
    if (lessonRemainingDays <= 4) {
      return (
        <Tag type="deadline" size="thumbnail" className={deadlineTagStyle}>
          마감 D-{lessonRemainingDays}
        </Tag>
      );
    }
    return null;
  };

  const translatedGenre = genreMapping[lessonGenre] || lessonGenre;
  const translatedLevel = levelMapping[lessonLevel] || lessonLevel;

  return (
    <Flex width="16.4rem" direction="column" gap="0.8rem" className={wrapperStyle}>
      <img src={lessonImageUrl} alt="클래스 섬네일" className={classImageStyle} />
      {renderDeadlineTag()}

      <Flex gap="0.4rem">
        <Tag type="genre" size="small">
          {translatedGenre}
        </Tag>
        <Tag type="level" size="small">
          {translatedLevel}
        </Tag>
      </Flex>

      <Head level="h5" tag="h7">
        {lessonName}
      </Head>
    </Flex>
  );
};

export default DancerClassItem;
