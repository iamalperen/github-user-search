import React, {useEffect, useState} from 'react';
import {RepoDetailCard, RepoIssueList} from "../../components";
import {RepoDetailPageContainer, RepoDetailPageWrapper} from "./RepoDetailPage.styles";
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {FETCH_REPO_ISSUES} from "../../graphql";
import {
    SearchResultsListLoading,
    SearchResultsListLoadMoreButton,
    SearchResultsListLoadMoreButtonText
} from "../SearchResultsPage/SearchResultsPage.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

const RepoDetailPage = () => {
    const [issueList, setIssueList] = useState([]);
    const [pageInfo, setPageInfo] = useState({hasNextPage: false, endCursor: ''});
    const [isLoadMoreButtonSpinnerShown, setIsLoadMoreButtonSpinnerShown] = useState(false);

    const navigate = useNavigate();
    const params = useParams();
    const userQuery = params.username;
    const repo = params.repo;

    const {loading, error, data, fetchMore, refetch} = useQuery(FETCH_REPO_ISSUES, {
        variables: {
            userQuery: userQuery,
            repo: repo
        }
    });

    console.log(data);

    useEffect(() => {
        if (error) {
            navigate('/');
        } else {
            if (!loading) {
                const issues = data.repository.issues.edges.map(issue => issue.node);
                setIssueList(issues);
                setPageInfo(data.repository.issues.pageInfo);
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
                console.log(prevResult);
                console.log(fetchMoreResult);
                const newResultsList = fetchMoreResult['repository'].issues.edges.map((user: any) => user.node);
                const combinedResults = [...issueList, ...newResultsList];
                setIssueList(combinedResults);
                setPageInfo(fetchMoreResult['repository'].issues.pageInfo);
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
        <RepoDetailPageWrapper data-testid="RepoDetailPage">
            <RepoDetailPageContainer>
                {!loading && (
                    <>
                        <RepoDetailCard details={data?.repository}/>
                        <RepoIssueList issues={issueList} refetch={refetch}/>
                    </>
                )}
                {loading && (
                    <SearchResultsListLoading> <FontAwesomeIcon icon={faSpinner} spin/> </SearchResultsListLoading>
                )}
                {(!loading && pageInfo.hasNextPage) && showLoadMoreButton()}
            </RepoDetailPageContainer>
        </RepoDetailPageWrapper>
    );
}

export default RepoDetailPage;
