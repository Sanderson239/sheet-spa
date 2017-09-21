import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSheet } from '../../actions';
import { HeaderCell } from '../HeaderCell/HeaderCell';
import { Row } from '../Row/Row';
import injectWidgetId from '../../utils/utils';


export class Spreadsheet extends Component {
  componentDidMount() {
    this.props.fetchSheet('1UcfQsQGTAAtjvyxv948z3hf0qiUnMNZF90-GcD7MF9g', 'Sheet1');
  }
  /* eslint-disable max-len */


  render() {
    const headerCellIds = this.props.sheet.header.headerCellIds;
    const rowIds = this.props.sheet.rowIds;

    return (
      <div className="spreadsheet">
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              { headerCellIds.map(headerCellId => <HeaderCell key={headerCellId} headerCellId={headerCellId} />) }
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { rowIds.map(rowId => <Row key={rowId} rowId={rowId} />) }
          </Table.Body>
        </Table>
      </div>
    );
  }
}

Spreadsheet.propTypes = {
  fetchSheet: PropTypes.func.isRequired,
  sheet: PropTypes.shape({ range: PropTypes.string, majorDimension: PropTypes.string, header: PropTypes.shape({ headerCellIds: PropTypes.array, headerCellsById: PropTypes.shape({}) }), rowIds: PropTypes.array, rowsById: PropTypes.shape({ cellIds: PropTypes.array, cellsById: PropTypes.shape({}) }) }).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const sheet = state.widgets.byId[id];
  return {
    sheet,
  };
};

export const mapDispatchToProps = dispatch => bindActionCreators({
  fetchSheet,
}, dispatch);

export default injectWidgetId(connect(mapStateToProps, mapDispatchToProps)(Spreadsheet));
