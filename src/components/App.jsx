import { Component } from 'react';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class App extends Component {
  constructor() {
    super();
    this.state = { ...INITIAL_STATE };
  }

  onLeaveFeedback = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.onLeaveFeedback}>
          Good
        </button>
        <button type="button" onClick={this.onLeaveFeedback}>
          Neutral
        </button>
        <button type="button" onClick={this.onLeaveFeedback}>
          Bad
        </button>
        <h3>Statistics</h3>
        <ul>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>
        </ul>
      </div>
    );
  }
}
