import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HeaderCell } from './HeaderCell';

describe('Spreadsheet HeaderCell', () => {
  it('should render a HeaderCell with headerCellId and headerCellsById', () => {
    const headerCellId = 1;
    const headerCellsById = { 1: 'AcolumnName', 2: 'BcolumnName', 3: 'CcolumnName', 4: 'DcolumnName', 5: 'EcolumnName' };
    const component = shallow(
      <HeaderCell
        headerCellId={headerCellId}
        headerCellsById={headerCellsById}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
