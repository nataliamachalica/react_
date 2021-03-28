import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForColumn, createActionAddCard}  from '../../../src/redux/cardsRedux';


const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});


const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
