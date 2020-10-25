import React from 'react';
import './Head.css';

const Head = ({ done, todo}) => {
    return (
        <div className = 'head-todo'>
            <h1>To do list</h1>
            <h2>{ todo } more todo, { done } done </h2>
        </div>
    );
}

export default Head;