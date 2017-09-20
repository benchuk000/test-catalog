import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/actions';
import './Toolbar.css';
import Checkbox from '../Checkbox/Checkbox';

class Toolbar extends Component {
  
  render() {

    return (
      <div className="toolbar container">
        <div className="toolbar__inputs">
          <Checkbox 
            isChecked={this.props.checkbox.men} 
            label="MEN"
            onChange={this.props.toggleMenCheckbox}
          />
          <Checkbox 
            isChecked={this.props.checkbox.women} 
            label="WOMEN"
            onChange={this.props.toggleWomenCheckbox}
          />
          <Checkbox 
            isChecked={this.props.checkbox.children} 
            label="CHILDREN"
            onChange={this.props.toggleChildrenCheckbox}
          />
        </div>
        <div className="toolbar__button-container">
          <button className="toolbar__button" onClick={this.props.clickButtonSeeAll}> SEE ALL PRODUCTS</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  checkbox : {
    men: state.checkboxs.men,
    women: state.checkboxs.women,
    children: state.checkboxs.children
  }
});

const mapDispatchToProps = dispatch => ({
  toggleMenCheckbox: () => dispatch(actions.toggleMenCheckbox()),
  toggleWomenCheckbox: () => dispatch(actions.toggleWomenCheckbox()),
  toggleChildrenCheckbox: () => dispatch(actions.toggleChildrenCheckbox()),
  clickButtonSeeAll: () => dispatch(actions.clickButtonSeeAll()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);

