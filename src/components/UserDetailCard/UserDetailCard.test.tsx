import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserDetailCard from './UserDetailCard';

describe('<UserDetailCard />', () => {
    test('it should mount', () => {
        render(<UserDetailCard details={""}/>);

        const userDetailCard = screen.getByTestId('UserDetailCard');

        expect(userDetailCard).toBeInTheDocument();
    });
});