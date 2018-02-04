import React, { Component } from 'react';

import { connect } from 'react-redux'

class App extends Component {

  render() {
    return (
      <div>
        <input type="text" className='trackInput'/>
        <button className="addTrack">Submit</button>
        <ul className="list"/>
      </div>
    )
  }
}

export default connect(
  state => ({
    testState: 'Ok'
  }),
  dispatch => ({

  })
)(App);

