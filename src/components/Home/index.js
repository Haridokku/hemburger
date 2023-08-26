import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="homeContainer">
      <Popup>
        <div className="displayDetails">
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
            alt="website logo"
            className="img"
          />
          <h1 className="heading">Home</h1>
        </div>
      </Popup>
    </div>
  </>
)
export default Home
