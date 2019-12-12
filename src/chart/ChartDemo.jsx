import React from 'react';
import { connect } from 'react-redux';
import { fetchChart, fetchChartSymbol } from './chart.action';
import { ENV } from '../env';
import * as d3 from 'd3';
import * as fc from 'd3fc';
import * as moment from 'moment';

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

    // this._handleFetch();
  }

  _handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  _handleFetch = () => {
    if (this.state.symbol === '') {
      this.props.fetchChart();
    } else {
      this.props.fetchChartSymbol({symbol: this.state.symbol});
    }
    // console.log(this.props.charts);
  }

  render() {
    const { charts } = this.props;
    return (
      <div className="uk-container" style={{marginTop: 50}}>
        <h2>{charts.meta.symbol}</h2>
        <span>{this.props.notifications[0]}</span><br />
        <input className="uk-input uk-form-width-small" type="text" 
          name="symbol"
          onChange={this._handleChange} 
          value={this.state.symbol}></input>
        <button className="uk-button uk-button-primary uk-margin-left"
          onClick={this._handleFetch}>GET DATA</button>
        <D3Ex2 prices={charts.prices} />
      </div>
    )
  }
}

class D3Ex2 extends React.Component {

  render() {
    const style = {
      width: 1000, height: 500
    }

    const _renderChart = () => {
      const svg = d3.select('#chart-element');

      let data = [];
      this.props.prices.forEach(p => {
        data.push(
          {
            date: new Date(p.date),
            open: p.open, 
            high: p.high, 
            low: p.low, 
            close: p.close, 
            volume: p.volume
          }
        )
      });

      const gridlines = fc.annotationSvgGridline();
      const candlestick = fc.seriesSvgCandlestick();
      const multi = fc.seriesSvgMulti()
        .series([gridlines, candlestick]);

      const xScale = fc.scaleDiscontinuous(
        d3.scaleTime()
          .domain([
            moment(d3.min(data, d => d.date)).subtract(2, 'days'), 
            moment(d3.max(data, d => d.date)).add(1, 'days')
          ])
      );

      const yScale = d3.scaleLinear()
        .domain([
          d3.min(data, d => d.low) - 100, d3.max(data, d => d.high) + 100
        ]);
      
      const chart = fc.chartCartesian(xScale, yScale)
        .svgPlotArea(multi);
      
      svg.datum(data).call(chart);
    }

    _renderChart();

    return (
      <d3fc-svg id="chart-element" style={style}></d3fc-svg>
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
    fetchChart: () => dispatch(fetchChart()),
    fetchChartSymbol: (symbol) => dispatch(fetchChartSymbol(symbol))
  };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ChartDemo);