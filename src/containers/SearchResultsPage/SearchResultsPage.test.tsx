import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchResultsPage from './SearchResultsPage';

describe('<SearchResultsPage />', () => {
    test('it should mount', () => {
        render(<SearchResultsPage/>);

        const searchResultsPage = screen.getByTestId('SearchResultsPage');

        expect(searchResultsPage).toBeInTheDocument();
    });
});