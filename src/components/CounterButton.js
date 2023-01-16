import * as React from 'react';

class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  changeCount = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  render() {
    return (
      <button onClick={this.changeCount}>
        Count: {this.state.count}
      </button>
    )
  }
}


export default CounterButton;
