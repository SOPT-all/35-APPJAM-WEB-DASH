import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from '@/pages/search/components/SearchBar';
import TabContainer from '@/pages/search/components/TabContainer';
import { DEFAULT_SORT_TAGS, SORT_LABELS } from '@/pages/search/constants/index';
import { headerRootCutomStyle } from '@/pages/search/index.css';
import { formatDateEndTime, formatDateStartTime } from '@/pages/search/utils';
import { useGetClassList, useGetDancerList } from '@/shared/apis/search/queries';
import Flex from '@/shared/components/Flex';
import Header from '@/shared/components/Header';
import { genreEngMapping, labelToSortOptionMap, levelEngMapping } from '@/shared/constants';

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [genre, setGenre] = useState<string | null>(location.state?.genre || null);

  if (location.state?.genre) {
    navigate(location.pathname, { replace: true });
  }

  const [searchValue, setSearchValue] = useState('');
  const [submittedSearchValue, setSubmittedSearchValue] = useState('');
  const [level, setLevel] = useState<string | null>(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedLabel, setSelectedLabel] = useState<keyof typeof labelToSortOptionMap>(SORT_LABELS.LATEST);

  const sortOption = labelToSortOptionMap[selectedLabel];

  const { data: dancerList, error } = useGetDancerList({
    keyword: submittedSearchValue,
  });

  const { data: classList } = useGetClassList({
    keyword: submittedSearchValue,
    genre: genre ? genreEngMapping[genre] : undefined,
    level: level ? levelEngMapping[level] : undefined,
    startDate: formatDateStartTime(startDate),
    endDate: formatDateEndTime(endDate),
    sortOption,
  });

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSearchIconClick = () => {
    setSubmittedSearchValue(searchValue);
  };

  return (
    <Flex>
      <Header.Root className={headerRootCutomStyle} isColor={true}>
        <Header.BackIcon />
        <SearchBar
          searchValue={searchValue}
          handleSearchChange={handleSearchChange}
          handleSearchIconClick={handleSearchIconClick}
        />
      </Header.Root>

      <TabContainer
        defaultSortTags={DEFAULT_SORT_TAGS}
        genre={genre}
        level={level}
        startDate={startDate}
        endDate={endDate}
        setGenre={setGenre}
        setLevel={setLevel}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        dancerList={dancerList}
        classList={classList}
        error={error}
        selectedLabel={selectedLabel}
        setSelectedLabel={setSelectedLabel}
      />
    </Flex>
  );
};

export default Search;
