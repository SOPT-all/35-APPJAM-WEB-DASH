import { essentialTextStyle } from '@/pages/instructor/classRegister/components/Description/index.css';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';

interface DescriptionProps {
  title: string;
  subTitle: string;
}

const Description = ({ title, subTitle }: DescriptionProps) => {
  return (
    <Flex direction="column" gap="0.8rem">
      <Flex gap="0.8rem">
        <Head level="h2" tag="h4">
          {title}
        </Head>
        <Text tag="c3" color="main4" className={essentialTextStyle}>
          *필수
        </Text>
      </Flex>
      <Text tag="b2" color="gray7">
        {subTitle}
      </Text>
    </Flex>
  );
};

export default Description;
