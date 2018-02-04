import React, { Component } from 'react';


class Dropdown extends Component {
  constructor(props){
    super(props);
    this.state = {isOpened: false}
  }

  toggleState() {
    this.setState({isOpened: !this.state.isOpened})
  }

  render() {
    let dropdownText;

    if (this.state.isOpened){
      dropdownText = <div>Here i am</div>
    }
    return (
      <div>
        <h1 onClick={this.toggleState.bind(this)}>Dropdown here</h1>
        {dropdownText}
      </div>
    )
  }
}

export default Dropdown;

