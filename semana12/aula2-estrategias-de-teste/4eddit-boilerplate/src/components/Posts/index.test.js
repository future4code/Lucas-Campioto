import React from 'react'
import {shallow} from 'enzyme'
import renderer from "react-test-renderer";
import {Posts,CardContent} from './index'


describe('test component Posts', () =>{
  

    it('renders correctly', () =>{
        const tree = renderer
            .create(<Posts></Posts>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })

})