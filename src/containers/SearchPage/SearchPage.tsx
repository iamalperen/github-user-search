import React from 'react';
import {useNavigate} from "react-router-dom";
import {
    SearchPageBannerArea,
    SearchPageBannerAreaLeft,
    SearchPageBannerAreaRight,
    SearchPageBannerImage,
    SearchPageBannerText,
    SearchPageContainer,
    SearchPageWrapper
} from "./SearchPage.styles";
import Github from '../../assets/github.jpg';
import {SearchBox} from "../../components";

const SearchPage = () => {
    const navigate = useNavigate();

    const searchUser = (user: string) => {
        if (user) {
            navigate('/search/' + user);
        }
    };

    return (
        <SearchPageWrapper data-testid="SearchPage">
            <SearchPageContainer>
                <SearchPageBannerArea>
                    <SearchPageBannerAreaLeft>
                        <SearchPageBannerText>
                            The Easiest Way to Search Github Users and Repos
                        </SearchPageBannerText>
                    </SearchPageBannerAreaLeft>
                    <SearchPageBannerAreaRight>
                        <SearchPageBannerImage src={Github}/>
                    </SearchPageBannerAreaRight>
                </SearchPageBannerArea>
                <SearchBox onSearch={searchUser}/>
            </SearchPageContainer>
        </SearchPageWrapper>
    );
}

export default SearchPage;
