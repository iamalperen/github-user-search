import styled from 'styled-components';
import {Container} from "../../common.styles";

const SearchResultsPageWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 32px 0;
`;

const SearchResultsPageContainer = styled(Container)`
`;

const SearchResultsListLoading = styled.div`
  margin-top: 32px;
  text-align: center;
  font-size: 32px;
`;

const SearchResultsListLoadMoreButton = styled.button`
  display: block;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  text-align: center;
  font-size: 14px;
  border: 0;
  padding: 16px;
  cursor: pointer;
  color: #24292f;
`;

const SearchResultsListLoadMoreButtonText = styled.span`

`;

export {
    SearchResultsPageWrapper,
    SearchResultsPageContainer,
    SearchResultsListLoading,
    SearchResultsListLoadMoreButton,
    SearchResultsListLoadMoreButtonText
};