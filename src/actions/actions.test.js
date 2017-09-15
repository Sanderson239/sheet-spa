import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SHEET_RETRIEVED from '.';
import * as actions from './index';
import data from '../seeds';

describe('actions', () => {
  it('should create an action to fetch a sheet', () => {
    const range = 'Sheet1!A1:D5';
    const majorDimension = 'ROWS';
    const header = ['AcolumnName', 'BcolumnName', 'CcolumnName', 'DcolumnName', 'EcolumnName'];
    const rows = [
      ['A2', 'B2', 'C2', 'D2', 'E2'],
      ['A3', 'B3', 'C3', 'D3', 'E3'],
      ['A4', 'B4', 'C4', 'D4', 'E4'],
      ['A5', 'B5', 'C5', 'D5', 'E5'],
    ];


    const expectedAction = {
      type: SHEET_RETRIEVED,
      range,
      majorDimension,
      header,
      rows,
    };

    expect(actions.fetchSheet(data)().then(result => result)).toEqual(expectedAction);
  });
});
