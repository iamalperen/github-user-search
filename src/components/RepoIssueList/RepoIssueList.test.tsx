import React from 'react';
import {screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RepoIssueList from './RepoIssueList';

describe('<RepoIssueList />', () => {
    test('it should mount', () => {
        //  render(<RepoIssueList/>);

        const repoIssueList = screen.getByTestId('RepoIssueList');

        expect(repoIssueList).toBeInTheDocument();
    });
});