import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Row } from './Row';

describe('Spreadsheet Row', () => {
  it('should render a Row with rowId and rowsById', () => {
    const rowId = 1;
    const rowsById = { 1: { cellIds: [1, 2, 3, 4, 5], cellsById: { 1: 'A2', 2: 'B2', 3: 'C2', 4: 'D2', 5: 'E2' } } };
    const component = shallow(
      <Row
        rowId={rowId}
        rowsById={rowsById}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
