import { classImageStyle, wrapperStyle, deadlineTagStyle } from '@/pages/dancer/DancerInfo/DancerClassItem/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Tag from '@/components/Tag';

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
    if (lessonRemainingDays <= 4) {
      return (
        <Tag type="deadline" size="thumbnail" className={deadlineTagStyle}>
          마감 D-{lessonRemainingDays}
        </Tag>
      );
    }
    return null;
  };

  return (
    <Flex width="16.4rem" direction="column" gap="0.8rem" className={wrapperStyle}>
      <img src={lessonImageUrl} alt="클래스 섬네일" className={classImageStyle} />
      {renderDeadlineTag()}

      <Flex gap="0.4rem">
        <Tag type="genre" size="small">
          {lessonGenre}
        </Tag>
        <Tag type="level" size="small">
          {lessonLevel}
        </Tag>
      </Flex>

      <Head level="h5" tag="h7">
        {lessonName}
      </Head>
    </Flex>
  );
};

export default DancerClassItem;
