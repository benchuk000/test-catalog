import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import { 
  DropDown, 
  DropDownMenu
} from '../DropDown/DropDown';
import Color from '../Color/Color';
import './Product.css';

class Product extends Component{

  render() {
    const { img, name, price, sizes, colors, id} = this.props.product;
   
    return (
      <div className="product" onClick={this.props.onClick}>
        <div className="product__title">
          <div className="product__title__size">
            <DropDown buttunTitle="SIZE" menu={(
              <DropDownMenu>
                {
                  sizes.map((size,index) =>
                    <li key={index}>{size}</li>
                  )
                }
              </DropDownMenu>
            )}/>
          </div>
          <div className="product__title__colors">
            {
              colors.map((color,index) => {
                return <Color color={color} key={index}/>
              })
            }
          </div>
        </div>
        <div className="product__body">
          <div className="product__body__avatar">
            <Link to={`/product/${id}`}>
              <img src={img} className="product__body__avatar__img" alt="Product"/>
            </Link>
          </div>
        </div>
        <div className="product__footer">
          <div className="product__body__name">
            {name}
          </div>
          <div className="product__footer__price">
            {`${price.toFixed(2)}€`}
          </div>  
        </div>
      </div>
    );
  }
}

export default Product;
