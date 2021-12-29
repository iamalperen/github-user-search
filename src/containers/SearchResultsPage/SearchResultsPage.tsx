import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {
    SearchResultsListLoading,
    SearchResultsListLoadMoreButton,
    SearchResultsListLoadMoreButtonText,
    SearchResultsPageContainer,
    SearchResultsPageWrapper
} from "./SearchResultsPage.styles";
import {SearchBox, SearchResultsList} from "../../components";
import {SEARCH_USERS} from "../../graphql";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SearchResultsPage = () => {
    const [userList, setUserList] = useState([]);
    const [pageInfo, setPageInfo] = useState({hasNextPage: false, endCursor: ''});
    const [isLoadMoreButtonSpinnerShown, setIsLoadMoreButtonSpinnerShown] = useState(false);

    const params = useParams()
    const username = params.username;
    const navigate = useNavigate();
    const {loading, error, data, fetchMore} = useQuery(SEARCH_USERS, {variables: {userQuery: username}});

    const searchUser = (userQuery: string) => {
        if (userQuery) {
            navigate('/search/' + userQuery);
        }
    };

    useEffect(() => {
        if (!loading) {
            const searchResultsList = data.search.edges.filter(user => user.node.__typename === 'User').map((user: any) => user.node);
            setUserList(searchResultsList);
            setPageInfo(data.search.pageInfo);
        }

    }, [loading, error, data]);

    const showLoadingSpinner = () => {
        return (
            <SearchResultsListLoading> <FontAwesomeIcon icon={faSpinner} spin/> </SearchResultsListLoading>
        )
    };

    const loadMore = () => {
        setIsLoadMoreButtonSpinnerShown(true);
        fetchMore({
            variables: {
                cursor: pageInfo.endCursor
            },
            updateQuery: (prevResult, {fetchMoreResult}) => {
                const newResultsList = fetchMoreResult['search'].edges.map((user: any) => user.node);
                const combinedResults = [...userList, ...newResultsList];
                setUserList(combinedResults);
                setPageInfo(fetchMoreResult['search'].pageInfo);
                setIsLoadMoreButtonSpinnerShown(false);
            }
        })
    };

    const showLoadMoreButton = () => {
        return (
            <SearchResultsListLoadMoreButton onClick={() => loadMore()} disabled={isLoadMoreButtonSpinnerShown}>
                {!isLoadMoreButtonSpinnerShown &&
                <SearchResultsListLoadMoreButtonText>Load More...</SearchResultsListLoadMoreButtonText>}
                {isLoadMoreButtonSpinnerShown && <FontAwesomeIcon icon={faSpinner} spin/>}
            </SearchResultsListLoadMoreButton>
        )
    };

    return (
        <SearchResultsPageWrapper data-testid="SearchResultsPage">
            <SearchResultsPageContainer>
                <SearchBox timeout={250} onSearch={searchUser} queryText={username}/>
                {!loading && <SearchResultsList data={userList}/>}
                {loading && showLoadingSpinner()}
                {(!loading && pageInfo.hasNextPage) && showLoadMoreButton()}
            </SearchResultsPageContainer>
        </SearchResultsPageWrapper>
    );
}

export default SearchResultsPage;
