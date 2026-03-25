import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    isTimerRunning: false,
    timeElapsedInSeconds: 0,
    timerLimitInMinutes: 25,
  }

  getElapsedSecondsInTimeFormat = () => {
    const {timerLimitInMinutes, timeElapsedInSeconds} = this.state
    const totalRemainingSeconds =
      timerLimitInMinutes * 60 - timeElapsedInSeconds

    const minutes = Math.floor(totalRemainingSeconds / 60)
    const seconds = Math.floor(totalRemainingSeconds % 60)

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  clearTimerInterval = () => clearInterval(this.intervalId)

  onStartOrPauseTimer = () => {
    const {isTimerRunning, timeElapsedInSeconds, timerLimitInMinutes} =
      this.state

    // 1. If timer is finished, and they click start, reset elapsed time
    if (timeElapsedInSeconds === timerLimitInMinutes * 60) {
      this.setState({timeElapsedInSeconds: 0})
    }

    if (isTimerRunning) {
      this.clearTimerInterval()
    } else {
      // 2. Start the interval
      this.intervalId = setInterval(() => {
        this.setState(prevState => ({
          timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
        }))
      }, 1000)
    }
    // 3. Toggle the running state
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  onDecrementLimit = () => {
    const {timerLimitInMinutes} = this.state
    if (timerLimitInMinutes > 1) {
      this.setState(prevState => ({
        timerLimitInMinutes: prevState.timerLimitInMinutes - 1,
      }))
    }
  }

  onIncrementLimit = () => {
    this.setState(prevState => ({
      timerLimitInMinutes: prevState.timerLimitInMinutes + 1,
    }))
  }

  onResetTimer = () => {
    this.clearTimerInterval()
    this.setState({
      isTimerRunning: false,
      timeElapsedInSeconds: 0,
      timerLimitInMinutes: 25,
    })
  }

  render() {
    const {isTimerRunning, timeElapsedInSeconds, timerLimitInMinutes} =
      this.state

    // Logic for the Play/Pause icon and text
    const labelText = isTimerRunning ? 'Running' : 'Paused'
    const startPauseIconUrl = isTimerRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const startPauseAltText = isTimerRunning ? 'pause icon' : 'play icon'

    // Determine if the +/- buttons should be disabled
    const isButtonsDisabled = timeElapsedInSeconds > 0

    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="heading">Digital Timer</h1>
          <div className="timer-main-container">
            <div className="time-container">
              <div className="time-circular-container">
                <h1 className="time">{this.getElapsedSecondsInTimeFormat()}</h1>
                <p className="time-status">{labelText}</p>
              </div>
            </div>
            <div className="timer-controls-container">
              <div className="timer-buttons-container">
                <button
                  type="button"
                  className="timer-controls-button"
                  onClick={this.onStartOrPauseTimer}
                >
                  <img
                    src={startPauseIconUrl}
                    alt={startPauseAltText}
                    className="timer-controls-button-image"
                  />
                  {isTimerRunning ? 'Pause' : 'Start'}
                </button>
                <button
                  type="button"
                  className="timer-controls-button"
                  onClick={this.onResetTimer}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="timer-controls-button-image"
                  />
                  Reset
                </button>
              </div>
              <div className="timer-limiter-container">
                <p className="timer-limiter-heading">Set Timer Limit</p>
                <div className="timer-limiter-controls-container">
                  <button
                    type="button"
                    className="timer-limiter-controls-button"
                    onClick={this.onDecrementLimit}
                    disabled={isButtonsDisabled}
                  >
                    -
                  </button>
                  <p className="timer-limiter-value">{timerLimitInMinutes}</p>
                  <button
                    type="button"
                    className="timer-limiter-controls-button"
                    onClick={this.onIncrementLimit}
                    disabled={isButtonsDisabled}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
