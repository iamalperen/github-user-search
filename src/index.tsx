import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import {ApolloProvider} from '@apollo/client';
import {client} from "./apollo-client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components";
import {SearchPage, SearchResultsPage, UserDetailPage} from "./containers";
import RepoDetailPage from "./containers/RepoDetailPage/RepoDetailPage";


ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="*" element={<SearchPage/>}/>
                <Route path="/search/:username" element={<SearchResultsPage/>}/>
                <Route path="/user/:username" element={<UserDetailPage/>}/>
                <Route path="/user/:username/repository/:repo" element={<RepoDetailPage/>}/>
            </Routes>
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root')
);
