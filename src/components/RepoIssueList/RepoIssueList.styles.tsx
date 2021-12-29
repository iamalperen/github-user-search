import styled from 'styled-components';
import {SearchResultsListTitle} from "../SearchResultsList/SearchResultsList.styles";

const RepoIssueListWrapper = styled.div`
  margin-top: 32px;
  background-color: white;
  padding: 16px 32px;

  ${SearchResultsListTitle} {
    font-size: 16px
  }
`;

const RepoIssueListHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RepoIssueListCreateButton = styled.button`
  background-color: #2da44e;
  color: white;
  border: 1px solid #1b1f2426;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  padding: 12px;
  cursor: pointer;
`;

const RepoIssueListContainer = styled.div`
`;


const RepoIssueListItem = styled.div`
  border-bottom: 1px solid #d8dee4;
`;


const RepoIssueListItemTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
`;


const RepoIssueListItemDetail = styled.p`
  font-size: 14px;
`;


export {
    RepoIssueListWrapper,
    RepoIssueListCreateButton,
    RepoIssueListHeader,
    RepoIssueListContainer,
    RepoIssueListItem,
    RepoIssueListItemTitle,
    RepoIssueListItemDetail
};