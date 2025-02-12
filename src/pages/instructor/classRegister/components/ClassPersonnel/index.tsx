import { ChangeEvent } from 'react';
import {
  personnelContainerStyle,
  personnelTextStyle,
} from '@/pages/instructor/classRegister/components/ClassPersonnel/index.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import Flex from '@/shared/components/Flex';
import Input from '@/shared/components/Input';
import Text from '@/shared/components/Text';

interface ClassPersonnelProps {
  personnel: string;
  handlePersonnelChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ClassPersonnel = ({ personnel, handlePersonnelChange }: ClassPersonnelProps) => {
  return (
    <Flex tag="section" direction="column" gap="2rem" width="100%" marginBottom="4rem">
      <Description title="모집 인원" subTitle="원활한 클래스 진행을 위해 최대 인원을 알려주세요" />
      <div className={personnelContainerStyle}>
        <Input placeholder="0" value={personnel} onChange={handlePersonnelChange} />
        <Text tag="b5" className={personnelTextStyle}>
          명
        </Text>
      </div>
    </Flex>
  );
};

export default ClassPersonnel;
