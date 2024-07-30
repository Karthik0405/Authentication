// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  gettingHomeDetails = () => (
    <div className="home-image-container">
      <div className="home-details-container">
        <h1 className="home-heading">Clothes That Get You Noticed </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-img-sm"
        />
        <div className="button-container">
          <p className="home-para">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </p>
          <button className="shop-now-button" type="button">
            Shop Now
          </button>
        </div>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-img"
      />
    </div>
  )

  render() {
    return (
      <div className="home-container">
        <Header />
        {this.gettingHomeDetails()}
      </div>
    )
  }
}

export default Home
