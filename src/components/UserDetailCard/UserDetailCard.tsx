import React from 'react';
import {UserDetailCardWrapper} from "./UserDetailCard.styles";
import {
    SearchResultsListItemDetailContainer,
    SearchResultsListItemDetailUsername,
    SearchResultsListItemImage,
    SearchResultsListItemImageContainer
} from "../SearchResultsList/SearchResultsList.styles";

const UserDetailCard = (props: { details: any }) => {

    return (
        <UserDetailCardWrapper data-testid="UserDetailCard">
            <SearchResultsListItemImageContainer>
                <SearchResultsListItemImage src={props.details.avatarUrl}/>
            </SearchResultsListItemImageContainer>
            <SearchResultsListItemDetailContainer>
                <SearchResultsListItemDetailUsername>{props.details.name || props.details.login}</SearchResultsListItemDetailUsername>
            </SearchResultsListItemDetailContainer>
        </UserDetailCardWrapper>
    );
}

export default UserDetailCard;
