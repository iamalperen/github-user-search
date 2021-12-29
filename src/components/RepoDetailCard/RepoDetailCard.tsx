import React from 'react';
import {
    RepoDetailCardDescription,
    RepoDetailCardLeft,
    RepoDetailCardStars,
    RepoDetailCardTitle,
    RepoDetailCardWrapper
} from "./RepoDetailCard.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {UserRepoListStarCount} from "../UserRepoList/UserRepoList.styles";
import {useParams} from "react-router-dom";

const RepoDetailCard = (props: { details: any }) => {
    const params = useParams();
    const userQuery = params.username;
    const repo = params.repo;
    console.log(props.details);

    return (
        <RepoDetailCardWrapper data-testid="RepoDetailCard">
            <RepoDetailCardLeft>
                <RepoDetailCardTitle>{repo}</RepoDetailCardTitle>
                {props.details.description &&
                <RepoDetailCardDescription>{props.details.description}</RepoDetailCardDescription>
                }
            </RepoDetailCardLeft>
            <RepoDetailCardStars>
                {props.details.stargazerCount > 0 &&
                <>
                    <FontAwesomeIcon icon={faStar}/>
                    <UserRepoListStarCount>{props.details.stargazerCount}</UserRepoListStarCount>
                </>
                }
            </RepoDetailCardStars>
        </RepoDetailCardWrapper>
    )
};

export default RepoDetailCard;
