import React from 'react'
import renderer from "react-test-renderer";
import Task from './task';

describe ('teste componente task', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Task></Task>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})