import styled from 'styled-components';

const SearchResultsListWrapper = styled.div`
  margin-top: 32px;
  background-color: white;
  padding: 16px 32px;
`;

const SearchResultsListTitle = styled.h1`
  color: #5a5a5a;
  font-size: 32px;
`;

const SearchResultsListItem = styled.div`
  a {
    display: flex;
    height: 80px;
    padding: 20px 0;
    border-bottom-color: #e2e8f0;
    border-bottom-style: solid;
    border-bottom-width: 1px !important;
    text-decoration: none;

    &:hover {
      background-color: #f7f6f6;
    }

  }
`;

const SearchResultsListItemImageContainer = styled.div`
  width: 80px;
  padding-left: 20px;
`;

const SearchResultsListItemImage = styled.img`
  width: 100%;
  height: auto;
`;

const SearchResultsListItemDetailContainer = styled.div`
  display: flex;
  margin-left: 16px;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;

const SearchResultsListItemDetailUsername = styled.p`
  margin: 8px;
  font-size: 24px;
  color: #0969da;
`;

export {
    SearchResultsListWrapper,
    SearchResultsListTitle,
    SearchResultsListItem,
    SearchResultsListItemImageContainer,
    SearchResultsListItemImage,
    SearchResultsListItemDetailContainer,
    SearchResultsListItemDetailUsername
};