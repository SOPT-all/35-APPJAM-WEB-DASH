import { useState } from 'react';
import BottomSheet from '@/pages/search/components/TabContainer/TagSection/BottomSheet';
import { tagCustomStyle } from '@/pages/search/components/TabContainer/TagSection/index.css';
import Flex from '@/components/Flex';
import Tag from '@/components/Tag';
import { IcFilterGray } from '@/assets/svg';

interface TagItem {
  label: string;
  icon?: JSX.Element;
  type?: string;
}

interface TagSectionProps {
  displayTags: TagItem[];
  activeTags: TagItem[];
  tagSize: 'search' | 'sort';
  tagType: 'search' | 'sort';
  setLevel: (level: string | null) => void;
  appliedLevel: string | null;
  startDate: string;
  endDate: string;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
}

const TagSection = ({
  displayTags,
  activeTags,
  tagSize,
  tagType,
  setLevel,
  appliedLevel,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: TagSectionProps) => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedTagIndex, setSelectedTagIndex] = useState(0);

  const handleTagClick = (index: number) => {
    if (activeTags.length > 0) {
      const clickedTag = activeTags[index];
      const tabMapping: Record<string, number> = {
        genre: 0,
        level: 1,
        dateRange: 2,
      };
      if (clickedTag.type) {
        setSelectedTagIndex(tabMapping[clickedTag.type]);
      }
    } else {
      setSelectedTagIndex(index);
    }
    setIsBottomSheetOpen(true);
  };

  const handleBottomSheetClose = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <>
      <Flex justify="spaceBetween" paddingTop="1.2rem" paddingBottom="1.6rem">
        <Flex gap="0.6rem">
          {displayTags.map((tag, index) => (
            <Tag
              className={tagCustomStyle}
              key={index}
              size={tagSize}
              type={tagType}
              onClick={() => handleTagClick(index)}>
              {tag.label}
              {tag.icon && tag.icon}
            </Tag>
          ))}
        </Flex>
        {!activeTags.length && <IcFilterGray width={28} onClick={() => handleTagClick(0)} />}
      </Flex>
      {isBottomSheetOpen && (
        <BottomSheet
          onClose={handleBottomSheetClose}
          initialTabIndex={selectedTagIndex}
          setLevel={setLevel}
          appliedLevel={appliedLevel}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      )}
    </>
  );
};

export default TagSection;