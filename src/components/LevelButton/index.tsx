import Head from '@/components/Head/index';
import { levelButtonStyle } from '@/components/LevelButton/index.css';
import Text from '@/components/Text';

interface LevelButtonProps {
  level: {
    icon: JSX.Element;
    title: string;
    description: string;
  };
  isSelected: boolean;
  onClick: () => void;
}

const LevelButton = ({ level, isSelected, onClick }: LevelButtonProps) => {
  return (
    <button className={levelButtonStyle({ selected: isSelected })} onClick={onClick}>
      {level.icon}
      <Head tag="h6" level="h6" color={isSelected ? 'white' : 'gray9'}>
        {level.title}
      </Head>
      <Text tag="b8" color={isSelected ? 'gray2' : 'gray9'}>
        {level.description}
      </Text>
    </button>
  );
};

export default LevelButton;
