import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Cell } from './Cell';

describe('Spreadsheet cell', () => {
  it('should render a Cell with cellId and cellsById', () => {
    const cellId = 1;
    const cellsById = { 1: 'A2', 2: 'B2', 3: 'C2', 4: 'D2', 5: 'E2' };
    const component = shallow(
      <Cell
        cellId={cellId}
        cellsById={cellsById}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
