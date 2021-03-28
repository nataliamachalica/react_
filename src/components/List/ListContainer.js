import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createActionAddColumn}  from '../../../src/redux/columnsRedux';

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);