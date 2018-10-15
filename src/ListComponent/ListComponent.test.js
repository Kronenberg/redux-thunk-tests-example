import React from 'react';
import { shallow } from '../enzyme';

import List from './ListComponent';

describe('List tests', () => {

    it('renders list-items', () => {
        const items = ['one', 'two', 'three'];
        const wrapper = shallow(<List items={items} />);

        console.log(wrapper.debug());
        // Expect the wrapper object to be defined
        expect(wrapper.find('.list-items')).toBeDefined();
        expect(wrapper.find('.item')).toHaveLength(items.length);
    });

    it('renders a list item', () => {
        const items = ['Thor', 'Loki'];
        const wrapper = shallow(<List items={items} />);

        // Check if an element in the Component exists
        expect(wrapper.contains(<li key='Thor' className="item">Thor</li >)).toBeTruthy();
    });

    it('renders correct text in item', () => {
        const items = ['John', 'James', 'Luke', 2];
        const wrapper = shallow(<List items={items} />);

        items.map((e, i) => {
            expect(wrapper.find('.item').get(i).props.children).toEqual(e);
        });
    });
});