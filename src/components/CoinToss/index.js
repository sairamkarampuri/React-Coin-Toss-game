// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    isHeads: true,
    headsCount: 0,
    tailsCount: 0,
  }

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult) {
      console.log(tossResult)
      console.log('tail')
      this.setState(prevState => ({
        isHeads: false,
        tailsCount: prevState.tailsCount + 1,
      }))
    } else {
      console.log(tossResult)
      console.log('heads')
      this.setState(prevState => ({
        isHeads: true,
        headsCount: prevState.headsCount + 1,
      }))
    }
  }

  render() {
    const {isHeads, headsCount, tailsCount} = this.state

    return (
      <div className="bg-container">
        <div className="coin-toss-container">
          <h1 className="game-heading">Coin Toss Game</h1>
          <p className="game-description">Heads (or) Tails</p>
          <div>
            {isHeads ? (
              <img
                className="toss-result-img"
                src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
                alt="toss result"
              />
            ) : (
              <img
                className="toss-result-img"
                src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
                alt="toss result"
              />
            )}
          </div>

          <button
            className="toss-coin-button"
            type="button"
            onClick={this.tossCoin}
          >
            Toss Coin
          </button>
          <div className="toss-result-container">
            <p className="toss-result">Total: {headsCount + tailsCount}</p>
            <p className="toss-result">Heads: {headsCount}</p>
            <p className="toss-result">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
