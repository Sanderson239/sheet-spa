import reducer from '.';
import SHEET_RETRIEVED from '../actions/index';

describe('root reducer', () => {
  it('should return the initial state', () => {
    const expectedInitialState = {
      range: '',
      majorDimension: '',
      header: { headerCellIds: [], headerCellsById: {} },
      rowIds: [],
      rowsById: {},
    };

    expect(reducer(undefined, {})).toEqual(expectedInitialState);
  });

  it('should handle action type SHEET_RETRIEVED', () => {
    const oldState = {
      range: '',
      majorDimension: '',
      header: { headerCellIds: [], headerCellsById: {} },
      rowIds: [],
      rowsById: {},
    };

    const action = {
      type: SHEET_RETRIEVED,
      range: 'Sheet1!A1:D5',
      majorDimension: 'ROWS',
      header: ['AcolumnName', 'BcolumnName', 'CcolumnName', 'DcolumnName', 'EcolumnName'],
      rows: [
        ['A2', 'B2', 'C2', 'D2', 'E2'],
        ['A3', 'B3', 'C3', 'D3', 'E3'],
        ['A4', 'B4', 'C4', 'D4', 'E4'],
        ['A5', 'B5', 'C5', 'D5', 'E5'],
      ],
    };

    const newState = {
      sheet: {
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
      },
    };

    expect(reducer(oldState, action)).toEqual(newState);
  });
});
