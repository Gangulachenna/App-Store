// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabItem} = props
  const {tabId, displayText} = tabDetails

  const onButton = () => {
    setActiveTabItem(tabId)
  }

  return (
    <li className="tab-items">
      <button type="button" onClick={onButton} className="tab-button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
