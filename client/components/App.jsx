import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import {getPoses} from '../api'

import Pose from './Pose'
import Filter from './Filter'
import AddPose from './AddPose'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poseVisibile: false,
      activePose: null,
      poses: [],
      filterMenu: false,
      addPoseMenu: false
    }
    this.showFilteredPose = this.showFilteredPose.bind(this)
    this.minimize = this.minimize.bind(this)
    this.randomPose = this.randomPose.bind(this)
    this.toggleFilterMenu = this.toggleFilterMenu.bind(this)
    this.toggleAddPoseMenu = this.toggleAddPoseMenu.bind(this)
  }

  toggleFilterMenu() {
    this.setState({ filterMenu: !this.state.filterMenu})
    this.setState({ addPoseMenu: false})
  }

  toggleAddPoseMenu() {
    this.setState({ addPoseMenu: !this.state.addPoseMenu })
    this.setState({ filterMenu: false })
  }

  showFilteredPose(pose) {
    this.setState({
      poseVisible: true,
      activePose: pose
    })
  }

  showRandomPose() {
    this.setState({
      poseVisible: true,
      activePose: this.randomPose()
    })
  }

  randomPose() {
    let selectionOfPoses = this.state.poses.filter(element => element !== this.state.activePose)
    return selectionOfPoses[(Math.floor(Math.random() * selectionOfPoses.length))]
  }

    minimize() {
    this.setState( {filterMenu: false})
    this.setState( {addPoseMenu: false})
  }

  componentDidMount() {
    getPoses((poses) => this.setState({poses}))
  }

  render() {
    return (
      <div>
        <div id="navbar">
          <img className="logo" src="/images/makemeacro-logo.jpg" alt="Make Me Acro!" />
        </div>

        <section className="hero">
          <div className="container">
            {this.state.poseVisible && <Pose
              isVisible={this.state.poseVisible}
              pose={this.state.activePose} />}

            <p className={this.state.poseVisible ? "descr hide" : "descr show"}>
              Click the button below to see a random acro pose to perform!
            </p>

            <button type="button"
              onClick={(e) => {this.showRandomPose()}} className="button is-warning">Generate Pose</button>
          </div>
        </section>

        <div className="spanheader">
          <a href='#filter' onClick={() => this.toggleFilterMenu()}>
            <h3 className="hero is-danger is-fullwidth, spanheader">Apply Filter</h3>
          </a>
        </div>

        {this.state.filterMenu && <Filter
          showFilteredPose={this.showFilteredPose}
          minimize= {() => this.minimize()} />}

        <div className="spanheader">
          <a href='#addpose' onClick={() => this.toggleAddPoseMenu()}>
            <h3 className="hero is-danger, spanheader">Add Pose</h3>
          </a>
        </div>

        {this.state.addPoseMenu && <AddPose
          minimize= {() => this.minimize()} />}
      </div>
    )
  }
}


export default App
