import { dancerImageStyle } from '@/pages/search/components/DancerList/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Tag from '@/components/Tag';
import { vars } from '@/styles/theme.css';

interface Dancer {
  id: number;
  profileImage: string;
  nickname: string;
  genres: string[];
}

interface DancerListProps {
  dancers: Dancer[];
}

const DancerList = ({ dancers }: DancerListProps) => {
  return (
    <Flex tag="ul" width="100%" direction="column">
      {dancers.map((dancer) => (
        <Flex
          align="center"
          paddingTop="1.6rem"
          paddingBottom="1.6rem"
          gap="2rem"
          tag="li"
          borderBottom={`1px solid ${vars.colors.gray01}`}
          width="100%"
          key={dancer.id}>
          <img src={dancer.profileImage} alt={dancer.nickname} className={dancerImageStyle} />
          <Flex direction="column" gap="0.8rem">
            <Head level="h6" tag="h6">
              {dancer.nickname}
            </Head>
            <Flex gap="0.5rem">
              {dancer.genres.map((genre, index) => (
                <Tag key={index} type="search" size="large">
                  {genre}
                </Tag>
              ))}
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default DancerList;
