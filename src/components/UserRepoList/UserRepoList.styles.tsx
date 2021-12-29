import styled from 'styled-components';

const UserRepoListWrapper = styled.div`
  background-color: white;
  margin: 32px 0;
  padding: 32px 16px;
`;

const UserRepoListItem = styled.div`
  display: flex;
  margin-bottom: 8px;
  border-bottom-color: #e2e8f0;
  border-bottom-style: solid;
  border-bottom-width: 1px !important;
  padding-bottom: 16px;
`;

const UserRepoListItemLeftContainer = styled.div`
  flex: 9;

  a {
    display: block;
    padding: 16px 0;
    text-decoration: none;
    color: #0969da;
    font-size: 20px;
    font-weight: 500;
  }
`;

const UserRepoListItemRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: #eac54f;
`;

const UserRepoListItemLang = styled.div`
  font-size: 12px;
  color: #57606a;
`;

const UserRepoListItemLangTxt = styled.span`
  display: inline-block;
  margin-left: 4px;
  font-size: 12px;
`;

const UserRepoListStarCount = styled.span`
  display: inline-block;
  margin-left: 4px;
  color: #57606a;
  font-size: 14px;
`;

const UserRepoListTitle = styled.h1`
  font-size: 24px;
  color: #5a5a5a;
  margin: 0 0 16px 0;
`;


export {
    UserRepoListWrapper,
    UserRepoListItem,
    UserRepoListItemLeftContainer,
    UserRepoListItemRightContainer,
    UserRepoListItemLang,
    UserRepoListStarCount,
    UserRepoListItemLangTxt,
    UserRepoListTitle
};