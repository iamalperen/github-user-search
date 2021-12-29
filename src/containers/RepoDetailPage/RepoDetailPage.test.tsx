import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RepoDetailPage from './RepoDetailPage';

describe('<RepoDetailPage />', () => {
    test('it should mount', () => {
        render(<RepoDetailPage/>);

        const repoDetailPage = screen.getByTestId('RepoDetailPage');

        expect(repoDetailPage).toBeInTheDocument();
    });
});