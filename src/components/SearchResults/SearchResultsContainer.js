import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getSearchedCardsFromLists} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getSearchedCardsFromLists(state, props.match.params.string),
});

export default connect(mapStateToProps)(SearchResults);
