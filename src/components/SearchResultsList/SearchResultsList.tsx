import React from 'react';
import {
    SearchResultsListItem,
    SearchResultsListItemDetailContainer,
    SearchResultsListItemDetailUsername,
    SearchResultsListItemImage,
    SearchResultsListItemImageContainer,
    SearchResultsListTitle,
    SearchResultsListWrapper
} from "./SearchResultsList.styles";
import {Link} from "react-router-dom";

const SearchResultsList = (props: { data?: any[] }) => {
    const users: any[] = props.data;

    return (
        <SearchResultsListWrapper data-testid="SearchResultsList">
            <SearchResultsListTitle>Search Results</SearchResultsListTitle>
            {
                users && users.map((item: any) => {
                    return (
                        <SearchResultsListItem key={item.id}>
                            <Link
                                to={`/user/${item.login}`}
                            >
                                <SearchResultsListItemImageContainer>
                                    <SearchResultsListItemImage src={item.avatarUrl}/>
                                </SearchResultsListItemImageContainer>
                                <SearchResultsListItemDetailContainer>
                                    <SearchResultsListItemDetailUsername>{item.login}</SearchResultsListItemDetailUsername>
                                </SearchResultsListItemDetailContainer>

                            </Link>
                        </SearchResultsListItem>
                    );
                })
            }
        </SearchResultsListWrapper>
    )
};

export default SearchResultsList;
