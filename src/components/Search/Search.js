import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';
import {colors} from '../../theme/colors';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{backgroundColor: colors.bg.primary}}
    />
  );
};

export default SearchBar;
