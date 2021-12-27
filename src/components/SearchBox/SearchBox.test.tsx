import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBox from './SearchBox';

describe('<SearchBox />', () => {
    test('it should mount', () => {
        render(<SearchBox/>);

        const searchBox = screen.getByTestId('SearchBox');

        expect(searchBox).toBeInTheDocument();
    });
});