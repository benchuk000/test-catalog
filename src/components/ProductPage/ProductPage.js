import React, { Component}  from 'react';
import { Link } from 'react-router-dom';

import './ProductPage.css';
import data from '../../mockData/products.json';
import Color from '../Color/Color';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    }
  }
  
  componentWillMount = () => this.setState({product: data.products.find(product => product.id === +this.props.match.params.id)});


  render(){
    return <div>
    <div className="toolbar container">
      <Link to='/'>
      <div>
      <i className="fa fa-chevron-left" aria-hidden="true"></i>  <span className="back-to-catalog">BACK TO CATALOG</span>
      </div>
      </Link>
    </div>
    <div className="productsView__title container">
      <div className="productsView__title__name">
        {this.state.product.name}
      </div>
      <div className="productsView__title__line">
      </div>
    </div>
    <div className="product-container container">
      <div className="product-inner">
        <div className="product-inner__avatar">
          <img src={this.state.product.img} className="product-inner__avatar__img" alt="Product"></img>
        </div>
        <div className="product-inner__info">
          <table className="product-inner__table">
            <tr className="product-inner__table__row">
              <td className="product-inner__table__row__value">{`${this.state.product.price.toFixed(2)}€`}</td>
              <td>PRICE</td>
            </tr>
            <tr className="product-inner__table__row">
              <td className="product-inner__table__row__value">
                {
                  this.state.product.colors.map((color,index) => {
                    return <Color color={color}/>
                  })
                }
              </td>
              <td>COLORS</td>
            </tr>
            <tr className="product-inner__table__row">
              <td className="product-inner__table__row__value">
                {this.state.product.sizes.join(', ')}
              </td>
              <td>SIZES</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

  </div>
  }
}

export default ProductPage;