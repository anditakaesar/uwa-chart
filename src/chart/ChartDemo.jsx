import React from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { fetchChart } from './chart.action';
import { ENV } from '../env';

class ChartDemo extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      symbol: ''
    }
  }

  componentDidMount() {
    this.setState({
      symbol: ENV.DEFAULT_SYMBOL
    });
  }

  render() {
    return (
      <div className="uk-container">
        <h2>Line Data</h2>
        <span>{this.props.notifications[0]}</span><br />
        <input className="uk-input uk-form-width-small" type="text" value={this.state.symbol}></input>
        <button className="uk-button uk-button-primary uk-margin-left"
          onClick={() => this.props.fetchChart()}>Try Fetch</button>
        <Line data={this.props.charts} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    charts: state.charts,
    notifications: state.notifications
  };
}
  
function mapDispatchToProps(dispatch) {
  return {
    fetchChart: () => dispatch(fetchChart())
  };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ChartDemo);

// export default ChartDemo;