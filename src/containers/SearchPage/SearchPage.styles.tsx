import styled from 'styled-components';
import {Container} from "../../common.styles";

const SearchPageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SearchPageContainer = styled(Container)`
`;

const SearchPageBannerArea = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column-reverse;

  @media only screen and (min-width: 991px) {
    flex-direction: row;
  }
`;

const SearchPageBannerAreaLeft = styled.div`
  flex: 1;
  margin-right: 20px;

  @media only screen and (min-width: 768px) {
    flex: 3;
  }
`;

const SearchPageBannerAreaRight = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  @media only screen and (min-width: 768px) {
    flex: 2;
  }
`;

const SearchPageBannerText = styled.p`
  font-size: 24px;
  color: #1C1F34;
  text-align: center;

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 32px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    font-size: 54px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 72px;
  }
`;


const SearchPageBannerImage = styled.img`
  width: 100%;
  height: auto;
`;


export {
    SearchPageWrapper,
    SearchPageContainer,
    SearchPageBannerArea,
    SearchPageBannerAreaLeft,
    SearchPageBannerAreaRight,
    SearchPageBannerText,
    SearchPageBannerImage
};