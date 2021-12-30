import React from 'react';
import {screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateIssueModal from './CreateIssueModal';

describe('<CreateIssueModal />', () => {
    test('it should mount', () => {
        // render(<CreateIssueModal/>);

        const createIssueModal = screen.getByTestId('CreateIssueModal');

        expect(createIssueModal).toBeInTheDocument();
    });
});