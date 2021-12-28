import React, {useState} from 'react';
import {SearchBoxWrapper, SearchButton, SearchButtonText, SearchInput, SearchInputWrapper} from "./SearchBox.styles";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faSpinner} from "@fortawesome/free-solid-svg-icons";
import {SEARCH_OPERATION_TIMEOUT} from '../../constants/searchpage.constants';

const SearchBox = (props: { onSearch?: any, queryText?: string, timeout?: number }) => {
    const [query, setQuery] = useState(props.queryText || '');
    const [isSearching, setIsSearching] = useState(false);

    const searchUser = () => {
        setIsSearching(true);
        setTimeout(() => {
            props.onSearch(query);
            setIsSearching(false);
        }, (props.timeout || SEARCH_OPERATION_TIMEOUT));
    };

    return (
        <SearchBoxWrapper data-testid="SearchBox">
            <SearchInputWrapper>
                <SearchInput value={query}
                             onChange={event => setQuery(event.target.value)}
                             placeholder="Search Users..."/>
            </SearchInputWrapper>
            <SearchButton onClick={() => searchUser()} disabled={isSearching}>
                <SearchButtonText>Search</SearchButtonText>
                {!isSearching && <FontAwesomeIcon icon={faSearch}/>}
                {isSearching && <FontAwesomeIcon icon={faSpinner} spin/>}
            </SearchButton>
        </SearchBoxWrapper>
    );
}

export default SearchBox;
