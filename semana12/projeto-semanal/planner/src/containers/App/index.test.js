import React from 'react'
import renderer from "react-test-renderer";
import App from './index';

describe ('teste componente task', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<App></App>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})