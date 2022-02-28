import './index.css'

const HistoryItems = props => {
  const {eachListContainer, onDeleteSelection} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachListContainer

  const onDelete = () => {
    onDeleteSelection(id)
  }

  return (
    <div className="list-container">
      <p className="time-accessed">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="logo-com" />
      <p className="title-con">{title}</p>
      <p className="domain_url">{domainUrl}</p>
      <button
        type="button"
        onClick={onDelete}
        className="button-del"
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </div>
  )
}
export default HistoryItems
