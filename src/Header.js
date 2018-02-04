import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };
  render() {
    console.log(this.props.items);
    return (
      <div>
        {this.props.items.map((item, index) =>
          <a key={index} href={item.link}>{item.label}</a>
        )}
      </div>
    )
  }
}

export default Header;

