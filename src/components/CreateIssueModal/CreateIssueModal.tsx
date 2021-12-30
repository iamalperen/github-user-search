import React, {useEffect, useState} from 'react';
import {
    CreateIssueModalBody,
    CreateIssueModalContainer,
    CreateIssueModalFooter,
    CreateIssueModalHeader,
    CreateIssueModalIssueCancelButton,
    CreateIssueModalIssueCreateButton,
    CreateIssueModalIssueDescription,
    CreateIssueModalIssueTitleInput,
    CreateIssueModalTitle,
    CreateIssueModalWrapper
} from "./CreateIssueModal.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {useMutation} from "@apollo/client";
import {CREATE_ISSUE} from "../../graphql";


const CreateIssueModal = ({openModal, onOpend, refetch}) => {
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isCreating, setIsCreating] = useState(false);

    const [mutateFunction, {loading, error, data}] = useMutation(CREATE_ISSUE, {
            variables: {
                repositoryId: "R_kgDOGlyXoA",
                title: title,
                body: description
            },
            onCompleted: refetch
        }
    );

    console.log(openModal)

    useEffect(() => {
        onOpend(openModal);
        setShowModal(openModal);
    }, [openModal]);

    useEffect(() => {
        if (!error) {
            cancelCreateIssue();
        }
    }, [loading, error, data]);


    const createIssue = () => {
        if (title && description) {
            mutateFunction();
            console.log(title);
            console.log(description);
            setIsCreating(true);
        }

    };

    const cancelCreateIssue = () => {
        onOpend(false);
        setIsCreating(false);
        setTitle("");
        setDescription("");
    }


    return (
        <CreateIssueModalWrapper theme={{showModal: showModal}}>
            <CreateIssueModalContainer>
                <CreateIssueModalHeader>
                    <CreateIssueModalTitle>New Issue</CreateIssueModalTitle>
                </CreateIssueModalHeader>
                <CreateIssueModalBody>
                    <CreateIssueModalIssueTitleInput
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                    />
                    <CreateIssueModalIssueDescription
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                    />
                </CreateIssueModalBody>
                <CreateIssueModalFooter>
                    <CreateIssueModalIssueCreateButton onClick={() => createIssue()} disabled={isCreating}>
                        {isCreating && <>Creating <FontAwesomeIcon icon={faSpinner} spin/></>}
                        {!isCreating && <>Create</>}
                    </CreateIssueModalIssueCreateButton>
                    <CreateIssueModalIssueCancelButton
                        onClick={() => cancelCreateIssue()}> Cancel </CreateIssueModalIssueCancelButton>
                </CreateIssueModalFooter>
            </CreateIssueModalContainer>
        </CreateIssueModalWrapper>
    );
}

export default CreateIssueModal;