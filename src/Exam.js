import React, { Component } from 'react'
import ExamList from './ExamList'

class Exam extends Component {
  constructor (props, context) {
    super(props, context)

    this.clickChange = this.clickChange.bind(this)
    this.inputChange = this.inputChange.bind(this)

    this.state = {
      keyWord: '',
      examOption: '1'
    }
  }

  inputChange (keyWord) {
    this.setState({ keyWord: keyWord })
  }

  clickChange (examOption) {
    this.setState({ examOption: examOption })
  }

  render () {
    return (
      <div>
        <ExamSelector onChange={this.clickChange} />
        <SearchBox testlist={ExamList[this.state.examOption]} defaultKeyword={this.state.keyWord} keywordChange={this.inputChange} />
        <QList testlist={ExamList[this.state.examOption]} defaultKeyword={this.state.keyWord} keywordChange={this.inputChange} />
      </div>
    )
  }
}

class ExamSelector extends Component {
  constructor (props, context) {
    super(props, context)
    this.examChange = this.examChange.bind(this)
  }

  examChange (e) {
    this.props.onChange(e.target.value)
  }

  render () {
    return (
      <div class='py-5' >
        <div class='container'>
          <div class='row'>
            <div class='col-md-12' >
              <p class='lead'>Choosing examination paper </p>
              <select onChange={this.examChange}>
                <option value='1'>Exam 1</option>
                <option value='2'>Exam 2</option>
                <option value='3'>Exam 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class SearchBox extends Component {
  constructor (props) {
    super(props)
    this.inputChange = this.inputChange.bind(this)
  }

  inputChange (e) {
    this.props.keywordChange(e.target.value)
  }

  render () {
    const { defaultKeyword } = this.props

    return (
      <div class='py-5' >
        <div class='container'>
          <div class='row'>
            <div class='col-md-12' >
              <p class='lead'>Keyword search</p>
              <input type='text' placeholder='Input keyword here!' value={defaultKeyword} onChange={this.inputChange} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function getHighlightedText (text, higlight) {
  // Split on higlight term and include term into parts, ignore case
  let parts = text.split(new RegExp(`(${higlight})`, 'gi'))
  return <span> { parts.map((part, i) =>
    <span key={i} style={part.toLowerCase() === higlight.toLowerCase() ? { fontWeight: 'bold', backgroundColor: 'orange' } : {}}>
      { part }
    </span>)
  } </span>
}
class QList extends Component {
  render () {
    const { testlist } = this.props
    const { defaultKeyword } = this.props

    return (

      <div class='py-5' >
        <div class='container'>
          <div class='row'>
            <div class='col-md-12' >
              <p class='lead'>Question List</p>
              <ul>
                {testlist.map(exam => (
                  <li>
                    <p class='lead'>{getHighlightedText(exam.name, defaultKeyword)}</p>
                    <p class='lead'>{getHighlightedText(exam.q, defaultKeyword)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Exam
