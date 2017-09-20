import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Spreadsheet, mapDispatchToProps } from './Spreadsheet';
import { fetchSheet } from '../../actions';

describe('Spreadsheet', () => {
  it('should render a Spreadsheet with range, majorDimension, header, rowIds, and rowsById', () => {
    const sheet = {
      header: { headerCellIds: [1, 2, 3, 4, 5], headerCellsById: { 1: 'AcolumnName', 2: 'BcolumnName', 3: 'CcolumnName', 4: 'DcolumnName', 5: 'EcolumnName' } },
      majorDimension: 'ROWS',
      range: 'Sheet1!A1:D5',
      rowIds: [1, 2, 3, 4],
      rowsById: {
        1: { cellIds: [1, 2, 3, 4, 5], cellsById: { 1: 'A2', 2: 'B2', 3: 'C2', 4: 'D2', 5: 'E2' } },
        2: { CellIds: [1, 2, 3, 4, 5], cellsById: { 1: 'A3', 2: 'B3', 3: 'C3', 4: 'D3', 5: 'E3' } },
        3: { CellIds: [1, 2, 3, 4, 5], cellsById: { 1: 'A4', 2: 'B4', 3: 'C4', 4: 'D4', 5: 'E4' } },
        4: { CellIds: [1, 2, 3, 4, 5], cellsById: { 1: 'A5', 2: 'B5', 3: 'C5', 4: 'D5', 5: 'E5' } },
      },
    };
    const component = shallow(
      <Spreadsheet
        sheet={sheet}
        fetchSheet={fetchSheet}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('mapDispatchToProps', () => {
    const dispatch = jest.fn();

    expect(mapDispatchToProps(dispatch)).toHaveProperty('fetchSheet');
  });
});
