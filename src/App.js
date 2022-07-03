import {Component} from 'react'
import {v4} from 'uuid'

import Tag from './Components/Tag'
import Task from './Components/Task'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here

class App extends Component {
  state = {inputText: '', type: tagsList[0].optionId, list: [], activeId: ''}

  onRenderNoViews = () => (
    <div className="d6">
      <p className="h3">No Tasks Added Yet</p>
    </div>
  )

  onChangeText = e => this.setState({inputText: e.target.value})

  onChangeType = e => this.setState({type: e.target.value})

  onAddList = e => {
    e.preventDefault()

    const {type} = this.state
    const filteredData = tagsList.filter(each => each.optionId === type)

    this.setState(prev => ({
      inputText: '',
      type: tagsList[0].optionId,
      list: [
        ...prev.list,
        {text: prev.inputText, type: filteredData[0], id: v4()},
      ],
    }))
  }

  onChangeActive = id => {
    const {activeId} = this.state

    if (id === activeId) {
      this.setState({activeId: ''})
    } else {
      this.setState({activeId: id})
    }
  }

  filterDataOnTags = (list, activeId) => {
    if (activeId === '') {
      return list
    }
    return list.filter(each => each.type.optionId === activeId)
  }

  render() {
    const {inputText, type, list, activeId} = this.state

    const filteredData = this.filterDataOnTags(list, activeId)

    return (
      <div className="bg1">
        <div className="d1">
          <h1 className="h1"> Create a task </h1>
          <h1>Tags</h1>
          <form className="d2" onSubmit={this.onAddList}>
            <label htmlFor="task" className="h2">
              Task
            </label>
            <input
              className="in1"
              type="text"
              onChange={this.onChangeText}
              value={inputText}
              id="task"
              placeholder="Enter the task here"
            />
            <h1 className="h2">Tags </h1>
            <select className="in1" onChange={this.onChangeType} value={type}>
              {tagsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <div className="d3">
              <button type="submit" className="b1">
                Add Task
              </button>
            </div>
          </form>
        </div>
        <div className="d5">
          <h1 className="h2">Tags</h1>
          <h1>Tags</h1>
          <ul className="l1">
            {tagsList.map(each => (
              <Tag
                key={v4()}
                data={each}
                value={activeId}
                onChangeActive={this.onChangeActive}
              />
            ))}
          </ul>
          <h1 className="h2">Tasks</h1>
          {filteredData.length === 0 ? (
            this.onRenderNoViews()
          ) : (
            <ul>
              {filteredData.map(each => (
                <Task data={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
