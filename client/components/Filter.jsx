import React from 'react'

import Pose from './Pose'
import DropDownMenu from './DropDownMenu'

import {getPoses} from '../api'

class Filter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poses: [],
      targetOption: null,
      poseVisible: false,
      selectionSaved: false,
      noPoseFound: false,
      difficulty: null,
      type: null,
      numPpl: null,

    },
    this.toggleSelectMessage = this.toggleSelectMessage.bind(this)
    this.selectDifficulty = this.selectDifficulty.bind(this)
    this.selectType = this.selectType.bind(this)
    this.selectNumPpl = this.selectNumPpl.bind(this)
    this.noPoseFound = this.noPoseFound.bind(this)
  }

  toggleSelectMessage() {
    this.setState({selectionSaved: true})
  }

  showFilteredPose() {
    const {difficulty, type, numPpl, poses} = this.state
    let possiblePoses = poses.filter(pose => {
      return (
        (!difficulty || pose.difficulty == difficulty) &&
        (!type || pose.type == type) &&
        (!numPpl || pose.numPpl == numPpl)
      )
    })

    this.setState({poseVisible: true})

    if (possiblePoses.length > 0) {
      let pose = possiblePoses[Math.floor(Math.random() * possiblePoses.length)]
      this.props.showFilteredPose(pose)
    } else {
      this.setState({ selectionSaved: false})
      this.noPoseFound()
    }

  }

  noPoseFound() {
    this.setState({noPoseFound: true})
  }

  selectDifficulty(e) {
    this.toggleSelectMessage()
    this.setState({difficulty: e.target.value})
    console.log(e.target.value)
  }

  selectType(e) {
    this.toggleSelectMessage()
    this.setState({type: e.target.value})
    console.log(e.target.value)
  }

  selectNumPpl(e) {
    this.toggleSelectMessage()
    this.setState({numPpl: e.target.value})
    console.log(e.target.value)
  }

  componentDidMount() {
    getPoses((poses) => this.setState({poses}))
  }

  render() {
    return (
    <div>
      <section className="hero">
        <div className="container">
          <br />


          <DropDownMenu
          dataTitle='difficulty'
          title='Difficulty'
          selectOption={this.selectDifficulty}
          poses={this.state.poses}
          optionList={this.state.poses.map(entry =>
          entry.difficulty)}
          />

          <DropDownMenu
          dataTitle='type'
          title='Type'
          selectOption={this.selectType}
          poses={this.state.poses}
          optionList={this.state.poses.map(entry =>
          entry.type)}
          />

          <DropDownMenu
          dataTitle='numPpl'
          title='Number of People'
          selectOption={this.selectNumPpl}
          poses={this.state.poses}
          optionList={this.state.poses.map(entry =>
          entry.numPpl)}
          />

          <div className={this.state.selectionSaved ? "container show" : "container hide"}>
              <p>Saved!</p>
                <button className="button is-warning" type="button" onClick={(e) => {this.showFilteredPose()}}>Generate Pose</button>
          </div>

          <div className={this.state.noPoseFound ? "container show" : "container hide"}>
              <p className="descr">No such pose in the database :(</p>
          </div>

          <div className="container">
            <a href='#' onClick={this.props.minimize}>Cancel</a>
          </div>

        </div>
      </section>
    </div>
    )
  }
}



export default Filter
