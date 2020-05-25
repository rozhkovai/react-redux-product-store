import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productsActions from '../actions/products';
import App from '../components/App';
import filter from 'lodash/filter.js';

const sortBy = (products, categoriesBy) => {
  switch (categoriesBy) {
    case 'all':
      return products;
    case 'milk':
      return filter (products, { type: "milk"});
    case 'sugar':
      return filter (products, { type: "sugar"});
    case 'cheese':
      return filter (products, { type: "cheese"});
    case 'meat':
      return filter (products, { type: "meat"});
    case 'bread':
      return filter (products, { type: "bread"});
        default:
          return products;
  }
};

const mapStateToProps = ({products}) => ({
    products: sortBy(products.items, products.categoriesBy),
    isReady: products.isReady
  });
  
  const mapDispatchToProps = dispatch => ({
      ...bindActionCreators(productsActions, dispatch),
    });

  export default connect (mapStateToProps, mapDispatchToProps)(App);