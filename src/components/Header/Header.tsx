import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {HeaderContainer, HeaderLogo, HeaderLogoLink, HeaderLogoLinkText, HeaderWrapper} from "./Header.styles";

const Header = () => (
    <HeaderWrapper data-testid="Header">
        <HeaderContainer>
            <HeaderLogo>
                <HeaderLogoLink href="/">
                    <FontAwesomeIcon icon={faGithub}/>
                    <HeaderLogoLinkText>Github User Search</HeaderLogoLinkText>
                </HeaderLogoLink>
            </HeaderLogo>
        </HeaderContainer>
    </HeaderWrapper>
);

export default Header;
