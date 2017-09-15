import data from '../seeds';

export const SHEET_RETRIEVED = 'SHEET_RETRIEVED';

export function fetchSheet(data) {
  return async (dispatch) => {
    const range = data.range;
    const majorDimension = data.majorDimension;
    const header = data.values[0];
    const rows = data.values.slice(1, data.values.length);
    return dispatch({
      type: SHEET_RETRIEVED,
      range,
      majorDimension,
      header,
      rows,
    });
  };
}
