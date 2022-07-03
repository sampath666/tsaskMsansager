import './index.css'

const Task = props => {
  const {data} = props
  const {text, type} = data
  return (
    <li className="d8">
      <p className="p1">{text} </p>
      <p className="p2">{type.displayText}</p>
    </li>
  )
}

export default Task
