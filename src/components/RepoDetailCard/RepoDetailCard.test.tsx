import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RepoDetailCard from './RepoDetailCard';

describe('<RepoDetailCard />', () => {
    test('it should mount', () => {
        render(<RepoDetailCard/>);

        const repoDetailCard = screen.getByTestId('RepoDetailCard');

        expect(repoDetailCard).toBeInTheDocument();
    });
});