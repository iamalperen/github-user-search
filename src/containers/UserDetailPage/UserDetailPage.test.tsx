import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserDetailPage from './UserDetailPage';

describe('<UserDetailPage />', () => {
    test('it should mount', () => {
        render(<UserDetailPage/>);

        const userDetailPage = screen.getByTestId('UserDetailPage');

        expect(userDetailPage).toBeInTheDocument();
    });
});