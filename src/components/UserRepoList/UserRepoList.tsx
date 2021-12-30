import React from 'react';
import {
    UserRepoListItem,
    UserRepoListItemLang,
    UserRepoListItemLangTxt,
    UserRepoListItemLeftContainer,
    UserRepoListItemRightContainer,
    UserRepoListStarCount,
    UserRepoListTitle,
    UserRepoListWrapper
} from "./UserRepoList.styles";
import {Link, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faForward, faStar} from "@fortawesome/free-solid-svg-icons";

const UserRepoList = (props) => {
    const repos = props.repos;
    const params = useParams()
    const username = params.username;

    return (
        <UserRepoListWrapper data-testid="UserRepoList">
            {
                repos.length > 0 && (
                    <UserRepoListTitle>Repo List</UserRepoListTitle>
                )
            }
            {
                repos?.map(repo => (
                    <UserRepoListItem key={repo.id}>
                        <UserRepoListItemLeftContainer>
                            <Link to={`/user/${username}/repository/${repo?.name}`}>
                                {repo.name}
                            </Link>
                            {repo.primaryLanguage &&
                            <UserRepoListItemLang>
                                <FontAwesomeIcon icon={faForward}/>
                                <UserRepoListItemLangTxt>
                                    {repo.primaryLanguage.name}
                                </UserRepoListItemLangTxt>
                            </UserRepoListItemLang>
                            }
                        </UserRepoListItemLeftContainer>
                        <UserRepoListItemRightContainer>
                            {repo.stargazerCount > 0 &&
                            <>
                                <FontAwesomeIcon icon={faStar}/>
                                <UserRepoListStarCount>{repo.stargazerCount}</UserRepoListStarCount>
                            </>
                            }
                        </UserRepoListItemRightContainer>
                    </UserRepoListItem>
                ))
            }
            {
                repos.length === 0 && (
                    <UserRepoListTitle>No Repository exists.</UserRepoListTitle>
                )
            }
        </UserRepoListWrapper>
    );
}

export default UserRepoList;
