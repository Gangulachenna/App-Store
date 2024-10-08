// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="list-img-container">
      <img src={imageUrl} alt={appName} className="list-image" />
      <h1 className="app-name">{appName}</h1>
    </li>
  )
}

export default AppItem
