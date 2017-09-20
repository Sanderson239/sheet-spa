// // import { Reducer } from 'redux-testkit';
// import SHEET_RETRIEVED from '../actions/index';
// import rootReducer from './index';
//
// const initialState = { sheet: {
//   range: '',
//   majorDimension: '',
//   header: { headerCellIds: [], headerCellsById: {} },
//   rowIds: [],
//   rowsById: {},
// },
// };
//
// const newState = {
//   sheet: {
//     header: { headerCellIds: [1, 2, 3, 4, 5], headerCellsById: { 1: 'AcolumnName', 2: 'BcolumnName', 3: 'CcolumnName', 4: 'DcolumnName', 5: 'EcolumnName' } },
//     majorDimension: 'ROWS',
//     range: 'Sheet1!A1:D5',
//     rowIds: [1, 2, 3, 4],
//     rowsById: {
//       1: { cellIds: [1, 2, 3, 4, 5], cellsById: { 1: 'A2', 2: 'B2', 3: 'C2', 4: 'D2', 5: 'E2' } },
//       2: { CellIds: [1, 2, 3, 4, 5], cellsById: { 1: 'A3', 2: 'B3', 3: 'C3', 4: 'D3', 5: 'E3' } },
//       3: { CellIds: [1, 2, 3, 4, 5], cellsById: { 1: 'A4', 2: 'B4', 3: 'C4', 4: 'D4', 5: 'E4' } },
//       4: { CellIds: [1, 2, 3, 4, 5], cellsById: { 1: 'A5', 2: 'B5', 3: 'C5', 4: 'D5', 5: 'E5' } },
//     },
//   },
// };
//
// describe('fetchSheet reducer', () => {
//   it('should have initial state', () => {
//     expect(rootReducer(initialState, {}))
//       .toEqual({ sheet: {
//         range: '',
//         majorDimension: '',
//         header: { headerCellIds: [], headerCellsById: {} },
//         rowIds: [],
//         rowsById: {},
//       },
//       });
//   });
//
//   it('should update the state with a fetched sheet', () => {
//     const range = 'Sheet1!A1:D5';
//     const majorDimension = 'ROWS';
//     const header = ['AcolumnName', 'BcolumnName', 'CcolumnName', 'DcolumnName', 'EcolumnName'];
//     const rows = [
//       ['A2', 'B2', 'C2', 'D2', 'E2'],
//       ['A3', 'B3', 'C3', 'D3', 'E3'],
//       ['A4', 'B4', 'C4', 'D4', 'E4'],
//       ['A5', 'B5', 'C5', 'D5', 'E5'],
//     ];
//
//     expect(
//       rootReducer(initialState, {
//         type: SHEET_RETRIEVED,
//         range,
//         majorDimension,
//         header,
//         rows,
//       }),
//     ).toEqual(
//       newState,
//     );
//
//     expect(
//       rootReducer(
//
//         initialState,
//
//         {
//           type: SHEET_RETRIEVED,
//           range,
//           majorDimension,
//           header,
//           rows,
//         },
//       ),
//     ).toEqual([newState]);
//
//     // const action = {
//     //   range,
//     //   majorDimension,
//     //   header: { headerCellIds: header.map((value, idx) => idx + 1),
//     //     headerCellsById: header.reduce((result, value, idx) => {
//     //       const cells = result;
//     //       cells[idx + 1] = value;
//     //       return result;
//     //     }, {}) },
//     //   rowIds: rows.map((row, idx) => idx + 1),
//     //   rowsById: rows.reduce((result2, value, idx) => {
//     //     const cells = result2;
//     //     cells[idx + 1] = { cellIds: value.map((val, cellIdx) => cellIdx + 1),
//     //       cellsById: value.reduce((result3, cellValue, cellIdx) => {
//     //         const cellResult = result3;
//     //         cellResult[cellIdx + 1] = cellValue;
//     //         return result3;
//     //       }, {}) };
//     //     return result2;
//     //   }, {}),
//     // };
//
//     // Reducer(rootReducer).withState(initialState).expect(action).toReturnState(newState);
//   });
// });
