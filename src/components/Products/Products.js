import React,{Component} from 'react';
import { connect } from 'react-redux';

import products from '../../mockData/products.json';
import * as actions from '../../actions/actions';
import ProductsView from '../ProductsView/ProductsView';
import {DropDown,DropDownMenu} from '../DropDown/DropDown';
import './Products.css';

class Products extends Component{
  constructor(props) {
    super(props);
    this.state = {
      sort: {
        name: 'price',
        direction: 'asc'
      }
    }
  }

  setSorting = (sortName) => {
    const sortDirection = this.state.sort.name === sortName 
      ? this.state.sort.direction === 'asc' ? 'desc' : 'asc'
      : 'asc';

    this.setState(prevState => ({
      buttunTitle: sortName,
      sort: {
        name: sortName,
        direction: sortDirection
      }
    }));
  }

  getOrderedProducts = () => this.props.products.sort((productA, productB) => 
    this.state.sort.direction === 'asc'
      ? productA[this.state.sort.name] - productB[this.state.sort.name]
      : productB[this.state.sort.name] - productA[this.state.sort.name]
  );

  componentDidMount = () => this.props.setProducts(products.products);

  render() {
    return (
      <div className="container">
        <div className="sort">
          <div className="sort__name">
             SORT BY
          </div>
          <div className="sort__list">
           <DropDown buttunTitle={this.state.sort.name} menu={(
             <DropDownMenu>
               {
                 ['price', 'name'].map((item,index) => (
                   <li onClick={()=>this.setSorting(item)} className="sort__list__item" key={index}> 
                     {item} 
                     {this.state.sort.name === item && <i className={`fa fa-arrow-${this.state.sort.direction === 'asc' ? 'up': 'down'}`} aria-hidden="true"></i>} 
                    </li>
                 )
                )
               }
             </DropDownMenu>
           )}/> 
          </div>
        </div>
        <div className="all-products">
          {
            this.props.checkboxs.men
              ? (
                <ProductsView
                  title="MEN"
                  category="men"
                  products={this.getOrderedProducts().filter(product => product.type==='men')} 
                  numberOfpage={this.props.subpages.men}
                />
              )
              : null
          }
          {
            this.props.checkboxs.women
              ? (
                <ProductsView
                  title="WOMEN"
                  category="women"
                  products={this.getOrderedProducts().filter(product => product.type==='women')}
                  numberOfpage={this.props.subpages.women}
                />
              )
              : null
          }

          {
            this.props.checkboxs.children && (
              <ProductsView 
                title="CHILDREN"
                category="children"
                products={this.getOrderedProducts().filter(product => product.type==='children')}
                numberOfpage={this.props.subpages.children}
              />
            )
          }
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  products: state.products,
  checkboxs: state.checkboxs,
  subpages: state.subpages,
});

const mapDispatchToProps = dispatch => ({
  setProducts: data => dispatch(actions.setProducts(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);