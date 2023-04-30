import React from 'react';
import Login from './login';
import NavBar from './navbar';

export default class Form extends React.Component {
    render() {
        return (
            <div className="container">
                <NavBar />
                <Login />
            </div>
        );
    }
}