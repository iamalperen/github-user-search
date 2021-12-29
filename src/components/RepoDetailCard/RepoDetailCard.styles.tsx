import styled from 'styled-components';
import {UserRepoListStarCount} from "../UserRepoList/UserRepoList.styles";

const RepoDetailCardWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  background-color: white;
  padding: 32px 16px;
  align-items: center;
  justify-content: space-between;
`;

const RepoDetailCardTitle = styled.h1`
  color: #0969da;
  margin: 0;
  font-size: 32px;
`;

const RepoDetailCardStars = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  color: #eac54f;
  align-items: center;
  justify-content: center;

  ${UserRepoListStarCount} {
    font-size: 16px;
  }
`;

const RepoDetailCardLeft = styled.div`
  flex: 9;
`;

const RepoDetailCardDescription = styled.h2`
  margin: 8px 0 0 0;
  font-size: 14px;
  font-weight: 400;
`;

export {
    RepoDetailCardWrapper,
    RepoDetailCardTitle,
    RepoDetailCardStars,
    RepoDetailCardLeft,
    RepoDetailCardDescription
};