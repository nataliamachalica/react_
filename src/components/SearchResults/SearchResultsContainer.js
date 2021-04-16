import {connect} from 'react-redux';
import SearchResults from './SearchResults.js';
import {getSearchedCardsFromLists} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getSearchedCardsFromLists(state, props.match.params.string),
});

export default connect(mapStateToProps)(SearchResults);
