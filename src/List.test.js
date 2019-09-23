import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List.js';

describe('list components', () => {
    it('shows up the content', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
    });
});