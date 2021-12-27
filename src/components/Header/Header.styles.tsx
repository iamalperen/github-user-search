import styled from 'styled-components';
import {Container} from "../../common.styles";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 76px;
  background-color: #24292f;
  color: #fff;
  margin-bottom: 16px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

const HeaderContainer = styled(Container)`
  display: flex;
  position: relative;
  height: 100%;
  align-items: center;
`;

const HeaderLogo = styled.div`
  margin-left: 20px;

  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`;

const HeaderLogoLink = styled.a`
  display: block;
  outline: none;
  text-decoration: none;
  color: #fff;
  font-size: 24px;
`;

const HeaderLogoLinkText = styled.span`
  display: inline-block;
  margin-left: 10px;
`;


export {
    HeaderWrapper,
    HeaderContainer,
    HeaderLogo,
    HeaderLogoLink,
    HeaderLogoLinkText
};