import React, {useState} from 'react';
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
import {timeSince} from "../../common/utils";
import CreateIssueModal from "../CreateIssueModal/CreateIssueModal";

const RepoIssueList = (props: { issues?: any[], refetch: any }) => {
    const issues: any[] = props.issues;
    const [isOpen, setIsOpen] = useState(false);

    const openCreateIssueModal = (showModal) => {
        setIsOpen(showModal);
    }

    return (
        <RepoIssueListWrapper data-testid="RepoIssueList">
            <RepoIssueListHeader>
                {issues.length > 0 &&
                <SearchResultsListTitle>Open Issues</SearchResultsListTitle>
                }
                {issues.length === 0 &&
                <SearchResultsListTitle>No Open Issue Found!</SearchResultsListTitle>
                }
                <RepoIssueListCreateButton onClick={() => openCreateIssueModal(true)}>Create
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
            <CreateIssueModal refetch={props.refetch} onOpend={openCreateIssueModal} openModal={isOpen}/>
        </RepoIssueListWrapper>
    );
}

export default RepoIssueList;
