import React from 'react';
import { shallow } from 'enzyme';
import { toJson } from 'enzyme-to-json';
import { Cell, cellsById, cellId } from './Cell';

describe('Spreadsheet cell', () => {
  it('should render a cell', () => {
    const component = shallow(<Cell />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
