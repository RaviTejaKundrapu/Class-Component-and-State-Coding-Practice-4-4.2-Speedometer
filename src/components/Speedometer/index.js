// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increaseSpeed = () => {
    const {speed} = this.state // we can do destructuring here 
    if (speed < 200) {
      this.setState(prevSpeed => ({speed: prevSpeed.speed + 10}))
    }
  }

  decreaseSpeed = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevSpeed => ({speed: prevSpeed.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="SpeedometerHeading">SPEEDOMETER</h1>
        <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="Speedometer-Pic" className="SpeedometerImage" />
        <h1 className="SpeedCount">Speed is {speed}mph</h1>
        <p className="LimitDescription"> Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="ButtonContainer">
          <button className="Btn-Accelerate" type="button" onClick={this.increaseSpeed}>Accelerate</button>
          <button  className="Btn-Break" type="button" onClick={this.decreaseSpeed}>Apply Brake</button>
        </div>
      </div>
    )
  }
}

export default Speedometer
