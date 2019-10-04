import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List.js';
import store from './store.js';
import Card from './Card.js';

describe('list components', () => {
    it('shows up the content', () => {
        const div = document.createElement('div');
        // console.log(store.lists[0].id);
        ReactDOM.render(<List 
            key = {store.lists[0].id}
            header = {store.lists[0].header}
            cards = {store.lists[0].cardIds.map(id => store.allCards[id])} 
        />, div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<Card />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
});