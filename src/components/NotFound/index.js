import './index.css'

const NotFound = () => (
  <div className="NotFound">
    <img
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
      className="notfoundImg"
    />
    <h1 className="NotFound-Head">Page Not Found</h1>
    <p className="NotFoundPara">
      We are sorry, the page you requested could not be found.
    </p>
  </div>
)

export default NotFound
