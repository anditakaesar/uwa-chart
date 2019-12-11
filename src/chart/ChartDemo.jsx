import React from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { fetchChart } from './chart.action';

class ChartDemo extends React.Component {
    render() {
        return (
            <div className="uk-container">
                <h2>Line Data</h2>
                <span>{this.props.notifications[0]}</span>
                <button className="uk-button uk-button-default"
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