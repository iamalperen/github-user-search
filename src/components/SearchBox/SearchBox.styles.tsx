import styled from 'styled-components';

const SearchBoxWrapper = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: flex-start;
  background-color: #f3f1f1;
  padding: 40px;
  border-radius: 4px;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const SearchInputWrapper = styled.div`
  display: flex;
  flex: 4;
  align-items: center;
  height: 100%;
  padding: 8px 0;
  box-sizing: border-box;
  margin-right: 16px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: auto;
  }
`;

const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  padding-left: 6px;
  font-size: 18px;
  color: #8A93AD;
`;

const SearchButton = styled.button`
  flex: 1;
  height: 50px;
  margin-top: 6px;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`;

const SearchButtonText = styled.span`
  margin-right: 6px;
  font-size: 18px;
`;

export {
    SearchBoxWrapper,
    SearchInputWrapper,
    SearchInput,
    SearchButton,
    SearchButtonText
};