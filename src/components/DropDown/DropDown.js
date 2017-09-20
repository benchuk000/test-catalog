import React ,{Component} from 'react';

import './DropDown.css';

export class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    }
  }

  toogle = () => {
    this.setState(prevState => ({dropdownOpen: !prevState.dropdownOpen}));
  }
  onMenuItemClick = (currentMenuItem) => {
    this.setState({currentMenuItem: currentMenuItem });
  }
   render() {
     return (
        <div className="dropdown">
          <div onClick={this.toogle} className="dropdown__trigger">
            <span className="dropdown__trigger__title">{this.props.buttunTitle}</span>
            <i className={`fa fa-angle-${this.state.dropdownOpen ? 'up' : 'down'}`} aria-hidden="true"></i>
          </div>
          <div className={`dropdown__menu ${this.state.dropdownOpen ? 'dropdown__menu--open' : ''}`}>
            {this.props.menu}
          </div>
        
        {
          this.state.dropdownOpen && <div className="dropdown__outside" onClick={() => this.setState({dropdownOpen: false})}></div>
        }
       </div>
     );
   }
}

export const DropDownMenu = (props) => <ul {...props} className={`dropdown__menu__list ${props.className}`}></ul>;
