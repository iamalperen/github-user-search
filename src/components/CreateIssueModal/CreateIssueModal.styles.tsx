import styled from 'styled-components';
import {RepoIssueListCreateButton} from "../RepoIssueList/RepoIssueList.styles";

const CreateIssueModalWrapper = styled.div`
  opacity: ${props => (props.theme.showModal ? 1 : 0)};
  visibility: ${props => (props.theme.showModal ? 'visible' : 'hidden')};
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  transition: all 0.3s;
`;

CreateIssueModalWrapper.defaultProps = {
    theme: {
        showModal: false
    }
}


const CreateIssueModalContainer = styled.div`
  position: absolute;
  background-color: white;
  z-index: 1000;
  top: calc(50% - 200px);
  left: calc(50% - 250px);
  min-width: 500px;
`;

const CreateIssueModalHeader = styled.div``;

const CreateIssueModalTitle = styled.h3`
  margin: 0;
  padding: 16px;
  border-bottom: 1px solid #d8dee4;
`;

const CreateIssueModalBody = styled.div`
  padding: 16px 24px 16px 16px;
`;


const CreateIssueModalIssueTitleInput = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #d8dee4;
  padding: 8px 0 8px 8px;
  border-radius: 5px;
  margin-bottom: 16px;
`;

const CreateIssueModalIssueDescription = styled.textarea`
  width: 100%;
  height: 200px;
  border: 1px solid #d8dee4;
  padding: 8px 0 8px 8px;
  border-radius: 5px;
  resize: none;
`;


const CreateIssueModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const CreateIssueModalIssueCreateButton = styled(RepoIssueListCreateButton)`
  &:disabled {
    opacity: 0.75;
  }

`;

const CreateIssueModalIssueCancelButton = styled(RepoIssueListCreateButton)`
  margin-left: 8px;
  background-color: #f6f8fa;
  color: #24292f;
  border-color: #1b1f2426;
`;


export {
    CreateIssueModalWrapper,
    CreateIssueModalContainer,
    CreateIssueModalTitle,
    CreateIssueModalIssueTitleInput,
    CreateIssueModalHeader,
    CreateIssueModalBody,
    CreateIssueModalFooter,
    CreateIssueModalIssueDescription,
    CreateIssueModalIssueCreateButton,
    CreateIssueModalIssueCancelButton
};