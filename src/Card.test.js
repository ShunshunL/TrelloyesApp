import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card.js';

describe('card components', () => {
    it('shows up the content', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<Card />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

