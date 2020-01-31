import React from 'react'
import renderer from "react-test-renderer";
import {Planner} from './index';

describe ('teste componente task', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Planner></Planner>)
            .toJSON();
        expect(tree).toMatchSnapshot(); 
    })
})