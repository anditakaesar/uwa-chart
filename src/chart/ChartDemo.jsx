import React from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { fetchChart } from './chart.action';

class ChartDemo extends React.Component {
    render() {
        return (
            <div className="uk-container">
                <h2>Line Data</h2>
                <Line data={this.props.charts} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      charts: state.charts
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      fetchChart: () => dispatch(fetchChart())
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(ChartDemo);

// export default ChartDemo;