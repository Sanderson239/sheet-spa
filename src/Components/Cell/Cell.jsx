import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';


export const Cell = ({ cellId, cellsById }) => (
  <Table.Cell>
    {`${cellsById[cellId]}`}
  </Table.Cell>
);


Cell.propTypes = {
  cellId: PropTypes.number.isRequired,
  cellsById: PropTypes.shape({ 1: PropTypes.string }).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const cellIds = state.sheet.rowsById[ownProps.rowId].cellIds;
  const cellsById = state.sheet.rowsById[ownProps.rowId].cellsById;
  return {
    cellIds,
    cellsById,
  };
};


export default connect(
  mapStateToProps,
)(Cell);
