import React from 'react';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import HomePage from './View/HomePage/HomePage';
import Header from "./Copmonents/Header/Header";
import TodoPage from "./View/TodoPage/TodoPage";
import UserPage from "./View/UserPage/UserPage";

function App(props) {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/todo" element={<TodoPage />} />
                <Route path='/user' element={<UserPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
