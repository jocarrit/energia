import React from "react";

class Gauge extends React.Component {
  
    setPoint(min, max, set) {
      return (set / (max - min)) * 471;        
    }
    
    render() {
      return (
       <div id="wrapper">
          <svg id="meter" viewBox="0 90 400 180">
             
            <circle  id="low" r="150" cx="50%" cy="50%" stroke="gray"
                stroke-width="60" fill="none" stroke-dasharray="471, 943">
            </circle>
            
            <circle id="low" r="150" cx="50%" cy="50%" stroke={this.props.color ? this.props.color : "#FDE47F"}
                stroke-width="60" fill="none" stroke-dasharray={this.setPoint(this.props.min, this.props.max, this.props.set) + ", 943"}>
            </circle>
               
          </svg>
          <p id="number">{(this.setPoint(this.props.min, this.props.max, this.props.set) / 471) * 100}%</p>
        </div>
      )
    }
  }

  export default Gauge;