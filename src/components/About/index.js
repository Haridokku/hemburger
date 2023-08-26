import Header from '../Header'
import './index.css'

const About = () => (
  <>
    <Header />
    <div className="aboutContainer">
      <div className="displayDetails">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
          alt="about"
          className="img"
        />
        <h1 className="heading">About</h1>
      </div>
    </div>
  </>
)

export default About
