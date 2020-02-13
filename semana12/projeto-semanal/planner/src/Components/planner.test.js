import React from 'react'
import renderer from "react-test-renderer";
import PlannerTasks from "./Planner";

describe('teste componente PlannerTasks', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<PlannerTasks></PlannerTasks>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})
