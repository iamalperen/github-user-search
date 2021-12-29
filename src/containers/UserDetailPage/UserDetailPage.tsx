import React, {useEffect, useState} from 'react';
import {UserDetailPageContainer, UserDetailPageWrapper} from "./UserDetailPage.styles";
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {FETCH_USER_REPOS} from "../../graphql";
import {UserDetailCard, UserRepoList} from "../../components";
import {
    SearchResultsListLoading,
    SearchResultsListLoadMoreButton,
    SearchResultsListLoadMoreButtonText
} from "../SearchResultsPage/SearchResultsPage.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

const UserDetailPage = () => {
    const [repoList, setRepoList] = useState([]);
    const [pageInfo, setPageInfo] = useState({hasNextPage: false, endCursor: ''});
    const [isLoadMoreButtonSpinnerShown, setIsLoadMoreButtonSpinnerShown] = useState(false);

    const params = useParams()
    const username = params.username;
    const navigate = useNavigate();
    const {loading, error, data, fetchMore} = useQuery(FETCH_USER_REPOS, {variables: {userQuery: username}});


    useEffect(() => {
        if (error) {
            navigate('/');
        } else {
            if (!loading) {
                const repos = data.user.repositories.edges.map(repo => repo.node);
                setRepoList(repos);
                setPageInfo(data.user.repositories.pageInfo);
            }
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
                const newResultsList = fetchMoreResult['user'].repositories.edges.map((user: any) => user.node);
                const combinedResults = [...repoList, ...newResultsList];
                setRepoList(combinedResults);
                setPageInfo(fetchMoreResult['user'].repositories.pageInfo);
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
        <UserDetailPageWrapper data-testid="UserDetailPage">
            <UserDetailPageContainer>
                {!loading && (
                    <>
                        <UserDetailCard details={data?.user}/>
                        <UserRepoList repos={repoList}/>
                    </>
                )}
                {loading && (
                    <SearchResultsListLoading> <FontAwesomeIcon icon={faSpinner} spin/> </SearchResultsListLoading>
                )}
                {(!loading && pageInfo.hasNextPage) && showLoadMoreButton()}
            </UserDetailPageContainer>
        </UserDetailPageWrapper>
    );
}

export default UserDetailPage;
