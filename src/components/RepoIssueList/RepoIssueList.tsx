import React from 'react';
import {
    RepoIssueListContainer,
    RepoIssueListCreateButton,
    RepoIssueListHeader,
    RepoIssueListItem,
    RepoIssueListItemDetail,
    RepoIssueListItemTitle,
    RepoIssueListWrapper
} from "./RepoIssueList.styles";
import {SearchResultsListTitle} from "../SearchResultsList/SearchResultsList.styles";
import {useParams} from "react-router-dom";
import {timeSince} from "../../common/utils";

const RepoIssueList = (props: { issues?: any[] }) => {
    const issues: any[] = props.issues;
    const params = useParams();
    const userQuery = params.username;
    const repo = params.repo;

    const openCreateIssueModal = () => {
        console.log("create issue");
    }

    console.log(issues);

    return (
        <RepoIssueListWrapper data-testid="RepoIssueList">
            <RepoIssueListHeader>
                {issues.length > 0 &&
                <SearchResultsListTitle>Open Issues</SearchResultsListTitle>
                }
                {issues.length === 0 &&
                <SearchResultsListTitle>No Opened Issues Found!</SearchResultsListTitle>
                }
                <RepoIssueListCreateButton onClick={() => openCreateIssueModal()}>Create
                    Issue</RepoIssueListCreateButton>
            </RepoIssueListHeader>
            <RepoIssueListContainer>
                {
                    issues.map((issue, index) => {
                        return (
                            <RepoIssueListItem>
                                <RepoIssueListItemTitle>{issue.title}</RepoIssueListItemTitle>
                                <RepoIssueListItemDetail>#{index + 1} opened {timeSince(issue.createdAt)} ago
                                    by <i>{issue.author.login}</i> </RepoIssueListItemDetail>
                            </RepoIssueListItem>
                        );
                    })
                }
            </RepoIssueListContainer>
        </RepoIssueListWrapper>
    );
}

export default RepoIssueList;
