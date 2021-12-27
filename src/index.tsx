import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import {ApolloProvider} from '@apollo/client';
import {client} from "./apollo-client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import {SearchPage} from "./containers";


ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<SearchPage/>}/>
                <Route path="/search/:username" element={<>Search Results</>}/>
                <Route path="/user/:username" element={<>User Details</>}/>
                <Route path="/user/:username/repository/:repo" element={<>Repo Details</>}/>
            </Routes>
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root')
);
