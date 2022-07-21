import { useState, Component } from 'react';

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor');
    this.state = {
      name: '',
    };
  }
  componentDidMount() {
    console.log('Did Mount');
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Did Uupdate');
  }
  shouldComponentUpdate() {
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState);
    //return 0; retorna un snapshot en did update
  }
  render() {
    return (
      <div>
        <h2>LifeCycle</h2>
        <input
          value={this.state.name}
          onChange={({ target: { value } }) => this.setState({ name: value })}
        ></input>
      </div>
    );
  }
}
export default LifeCycle;
