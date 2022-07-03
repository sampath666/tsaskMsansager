import './index.css'

const Tag = props => {
  const {data, onChangeActive, value} = props
  const {displayText, optionId} = data
  const classText = value === optionId ? 'active-tag' : 'tag'

  const onClickOnTag = () => onChangeActive(optionId)

  return (
    <li className="l2">
      <button type="button" className={classText} onClick={onClickOnTag}>
        {displayText}
      </button>
    </li>
  )
}

export default Tag
