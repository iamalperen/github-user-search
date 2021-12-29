import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserRepoList from './UserRepoList';

describe('<UserRepoList />', () => {
    test('it should mount', () => {
        render(<UserRepoList/>);

        const userRepoList = screen.getByTestId('UserRepoList');

        expect(userRepoList).toBeInTheDocument();
    });
});