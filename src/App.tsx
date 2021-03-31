import React from 'react';
import './App.css';
import MainBlock from './components/MainBlock';
import MainMenu from './components/MainMenu';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutMe from "./components/AboutMe";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <MainMenu/>
                <MainBlock/>

            </div>
        </BrowserRouter>
    );
}

export default App;
