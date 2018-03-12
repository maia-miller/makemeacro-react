import React from 'react'

import DropDownMenu from './DropDownMenu'

import {insertNewPose} from '../api'
import {getPoses} from '../api'


class AddPose extends React.Component {
  constructor (props) {
      super(props)
      this.state = {
        name: '',
        type: '',
        difficulty: '',
        numPpl: '',
        image: '',
        savedMessage: false,
        poses: [],
        poseSet: []
      }
      this.addPose = this.addPose.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.selectDifficulty = this.selectDifficulty.bind(this)
      this.selectType = this.selectType.bind(this)
      this.selectNumPpl = this.selectNumPpl.bind(this)
      // this.difficultyOptions = this.difficultyOptions.bind(this)
    }

    selectDifficulty(e) {
      this.setState({difficulty: e.target.value})
    }

    selectType(e) {
      this.setState({type: e.target.value})
    }

    selectNumPpl(e) {
      this.setState({numPpl: e.target.value})
    }

    addPose(pose) {
      insertNewPose(this.state)
      this.setState( {savedMessage: true})
    }

    handleChange(e) {
      let currentState = this.state
      currentState[e.target.name] = e.target.value
      this.setState(currentState)
      console.log(e.target.name)
    }

    componentDidMount() {
      getPoses((poses) => this.setState({poses}))
    }

//**WORKING ON NO DUPLICATIONS**
    // difficultyOptions() {
    //   let poseSet = new Set([this.state.poses])
    //   let s = new Set([1,2,3])
    //   console.log(poseSet)
    //   console.log(poseSet.value)
    //   console.log(s)
    //   console.log(s[0])
    //   // return poseSet.map(entry =>
    //   // entry.difficulty)
    // }

  render() {
    return (
      <form>
        <section className="hero">
          <div className="container">
            <p className="descr">Be part of the community! Add your own pose, including photo, below.</p>
          </div>
        </section>

        <section className="hero">
          <div className="container">
            <div className="field">
              <div className="control">
                <input className="input is-primary" type="text" placeholder='Name of Pose' name='name'
                  onChange={this.handleChange}
                  value={this.state.value}
                />
              </div>
            </div>

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

            <div className="field">
              <div className="file is-primary">
                <label className="file-label">
                  <input className="file-input" type="file" name="image" onChange={this.handleChange} value={this.state.value} />
                  <span className="file-cta">
                    <span className="file-label">
                      Upload image…
                    </span>
                  </span>
                </label>
              </div>
            </div>

            <p className="is-small">Optional fields:</p>
            <div className="field">
              <div className="control">
                <input className="input is-primary is-small" type="text" placeholder='Who is in this pose?' name='name'
                  onChange={this.handleChange}
                  value={this.state.value}
                />
              </div>
            </div>

          <div className="field">
            <div className="control">
              <input className="input is-primary is-small" type="text" placeholder='What moves are involved here?' name='name'
                onChange={this.handleChange}
                value={this.state.value}
              />
            </div>
          </div>

          <div className={this.state.savedMessage ? "message show" : "message hide"}>
            <p>New Pose Added!</p>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button type='button' onClick={this.addPose} className="button is-warning" id="addposebutton">Add pose</button>
            </div>
            <div className="control">
              <a href='#' onClick={this.props.minimize}>Cancel</a>
            </div>
          </div>
        </div>
      </section>
    </form>
    )
  }
}

export default AddPose
