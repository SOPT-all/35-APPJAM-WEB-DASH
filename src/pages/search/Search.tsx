import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetClassList, useGetDancerList } from '@/pages/search/apis/queries';
import SearchBar from '@/pages/search/components/SearchBar/SearchBar';
import TabContainer from '@/pages/search/components/TabContainer/TabContainer';
import { DEFAULT_SORT_TAGS, SORT_LABELS } from '@/pages/search/constants/index';
import { headerRootCutomStyle } from '@/pages/search/search.css';
import { formatDateEndTime, formatDateStartTime } from '@/pages/search/utils';
import { handleSearchChange } from '@/pages/search/utils/searchHandlers';
import Flex from '@/shared/components/Flex/Flex';
import Header from '@/shared/components/Header/Header';
import { genreEngMapping, labelToSortOptionMap, levelEngMapping } from '@/shared/constants';
import useDebounce from '@/shared/hooks/useDebounce';

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [genre, setGenre] = useState<string | null>(location.state?.genre || null);

  if (location.state?.genre) {
    navigate(location.pathname, { replace: true });
  }

  const [searchValue, setSearchValue] = useState('');

  const [level, setLevel] = useState<string | null>(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedLabel, setSelectedLabel] = useState<keyof typeof labelToSortOptionMap>(SORT_LABELS.LATEST);

  const debouncedSearchValue = useDebounce({ value: searchValue, delay: 500 });

  const sortOption = labelToSortOptionMap[selectedLabel];

  const { data: dancerList, error } = useGetDancerList({
    keyword: debouncedSearchValue,
  });

  const { data: classList } = useGetClassList({
    keyword: debouncedSearchValue,
    genre: genre ? genreEngMapping[genre] : undefined,
    level: level ? levelEngMapping[level] : undefined,
    startDate: formatDateStartTime(startDate),
    endDate: formatDateEndTime(endDate),
    sortOption,
  });

  return (
    <Flex>
      <Header.Root className={headerRootCutomStyle} isColor={true}>
        <Header.BackIcon />
        <SearchBar searchValue={searchValue} handleSearchChange={handleSearchChange(setSearchValue)} />
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
