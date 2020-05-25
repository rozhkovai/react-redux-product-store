import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoriesActions from '../actions/categories';
import Categories from '../components/Categories';


const mapStateToProps = ({ products}) =>({
    categoriesBy: products.categoriesBy,
  });
  
  const mapDispatchToProps = dispatch => ({
      ...bindActionCreators(categoriesActions, dispatch)
    });

  export default connect (mapStateToProps, mapDispatchToProps)(Categories);