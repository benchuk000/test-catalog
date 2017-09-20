import React,{Component} from 'react';
import { connect } from 'react-redux';

import './ProductsView.css';
import Product from '../Product/Product';
import * as actions from '../../actions/actions';

const MAX_ITEM_PER_PAGE = 3;

class ProductsView extends Component {

  getProductsByNumber = () => this.props.products.splice((this.props.numberOfpage - 1) * MAX_ITEM_PER_PAGE, MAX_ITEM_PER_PAGE);
  
  render() {
    const PAGE_COUNT = Math.round(this.props.products.length / MAX_ITEM_PER_PAGE);

    return (
      <div className="productsView">
        <div className="productsView__title">
          <div className="productsView__title__name">
            {this.props.title} 
          </div>
          <div className="productsView__title__line">
          </div>
        </div>
        <div className="numbers">
            {this.props.numberOfpage} / {PAGE_COUNT}
        </div>
        <div className="arrows">
          <div className="arrows__left"  onClick= {() => this.props.numberOfpage > 1 ? this.props.toPrevSubpage(this.props.category) : null}>
            &lt;
          </div>
          <div className="arrows__right" onClick={() => this.props.numberOfpage < PAGE_COUNT ? this.props.toNextSubpage(this.props.category) : null}>
            &gt;
          </div>
        </div>

        <div className="products">
          {
            this.getProductsByNumber().map((product,index) =>
              <Product product={product} key={index}/>
            )
          }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toNextSubpage: category => dispatch(actions.toNextSubpage(category)),
  toPrevSubpage: category => dispatch(actions.toPrevSubpage(category))

});

export default connect(
  null,
  mapDispatchToProps
)(ProductsView);