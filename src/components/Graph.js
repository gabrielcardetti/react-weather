import React , {Component} from 'react'
import ChartistGraph from 'react-chartist'
import PropTypes from 'prop-types'
const options = {
axisX: {
    // The offset of the labels to the chart area
    offset: 30,
    // Position where labels are placed.
    position: 'end',
    // Allows you to correct label positioning on this axis by positive or negative x and y offset.
    labelOffset: {
      x: -20,
      y: 0
    },
    showLabel: true,
    showGrid: false,
    labelInterpolationFnc: Chartist.noop,
  },
  // Options for Y-Axis
  axisY: {
    // The offset of the labels to the chart area
    offset: 40,
    // Position where labels are placed
    position: 'start',
    // Allows you to correct label positioning on this axis by positive or negative x and y offset.
    labelOffset: {
      x: 0,
      y: 0
    },
    showLabel: true,
    showGrid: false,
    // Interpolation function that allows you to intercept the value from the axis label
    labelInterpolationFnc: Chartist.noop,
  },
  showLine: true,
  showPoint: false,

  // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
  lineSmooth: true,
  fullWidth: true,

};
const type = 'Line'

class GraphForecast extends Component{

  constructor(props){
    super(props);
    this.state = {
      data:null
    };
  }
  componentWillMount(){
    if(this.props.data != null){
      if(this.props.kind){
        const {hours, temp} = this.props.data
        const data = {labels:hours, series:[temp]}
        this.setState({data})}
      else{
        const days = []
        console.log(this.props,'propps')
        for(const value in this.props.data){
          days.push(value)
        }
        const data = {labels: days, series:[this.props.data]}
        console.log(data)
        this.setState({data})
      }
    }
  }
  render(){
    return this.state.data && <ChartistGraph data={this.state.data} options={options} type={type} />
  }
}
GraphForecast.propTypes = {
  data: PropTypes.array,
  kind: PropTypes.number
}
export default GraphForecast
