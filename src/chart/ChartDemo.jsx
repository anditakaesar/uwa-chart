import React from 'react';
import { connect } from 'react-redux';
// import { Line } from 'react-chartjs-2';
import { fetchChart, fetchChartSymbol } from './chart.action';
import { ENV } from '../env';
import * as d3 from 'd3';
import * as fc from 'd3fc';
import { randomFinancial, randomSkipWeekends } from 'd3fc-random-data';

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
  }

  render() {
    return (
      <div className="uk-container">
        {/* <h2>Line Data</h2>
        <span>{this.props.notifications[0]}</span><br />
        <input className="uk-input uk-form-width-small" type="text" 
          name="symbol"
          onChange={this._handleChange} 
          value={this.state.symbol}></input>
        <button className="uk-button uk-button-primary uk-margin-left"
          onClick={this._handleFetch}>GET DATA</button> */}
        {/* <Line data={this.props.charts} /><br /> */}
        <D3Ex />
      </div>
    )
  }
}


class D3Ex extends React.Component {

  componentDidMount() {
    this.createSeries();
  }

  createSeries = () => {
    const generator = randomFinancial()
      .startDate(new Date(2016, 0, 1))
      .startPrice(100)
      .filter(randomSkipWeekends);

    const svg = d3.select('#chart');
    let data = generator(50);
    console.log(data);

    const yExtent = fc.extentLinear()
      .accessors([
        function(d) { return d.high; },
        function(d) { return d.low; }
      ]);

    const xExtent = fc.extentDate()
      .accessors([function(d) { return d.date; }]);

    const gridlines = fc.annotationSvgGridline();
    const candlestick = fc.seriesSvgCandlestick();
    const multi = fc.seriesSvgMulti()
      .series([gridlines, candlestick]);

    const chart = fc.chartCartesian(
      fc.scaleDiscontinuous(d3.scaleTime()),
      d3.scaleLinear()
    )
      .yDomain(yExtent(data))
      .xDomain(xExtent(data))
      .svgPlotArea(multi);

    svg
      .datum(data)
      .call(chart);
    
  }

  createCircle = () => {
    const el = d3.select('svg');
    
    const width = +el.attr('width');
    const height = +el.attr('height');
    const circle1 = el.append('circle')
      .attr('r', width/2)
      .attr('cx', width/2)
      .attr('cy', height/2)
      .attr('fill', 'yellow')
      .attr('stroke', 'black');

    const g = el.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`)

    const mouth = g.append('path')
      .attr('d', d3.arc()({
        innerRadius: 150,
        outerRadius: 170,
        startAngle: Math.PI / 2,
        endAngle: Math.PI * 3 /2
      }));
  }

  createBar = () => {
    const svg = d3.select('svg');
    let populations = [
      { country: "Indonesia", value: 100 },
      { country: "Australia", value: 200 },
      { country: "US", value: 300 },

    ]
    const margin = {
      top: 10,
      right: 10,
      bottom: 30,
      left: 100
    }
    
    const width = svg.attr('width');
    const height = svg.attr('height');

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xValue = d => d.value + 100;
    const yValue = d => d.country;

    
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(populations, xValue) + 100])
      .range([0, innerWidth]);

    const yScale = d3.scaleBand()
      .domain(populations.map(yValue))
      .range([0, innerHeight])
      .padding(0.1);

    const yAxis = d3.axisLeft(yScale);
    const xAxis = d3.axisBottom(xScale);

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    
    g.append('g').call(yAxis);
    g.append('g').call(xAxis)
      .attr('transform', `translate(0, ${innerHeight})`);


    g.selectAll('rect').data(populations)
      .enter().append('rect')
      .attr('y', d => yScale(yValue(d)))
      .attr('width', d => xScale(xValue(d)))
      .attr('height', yScale.bandwidth());

  }

  render() {
    return <div id="chart" height={1000} width={1000} style={{ marginTop: 200 }}></div>
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

// export default ChartDemo;