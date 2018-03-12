import React from 'react'

export default (props) => {
  const {pose, isVisible} = props
  const classes = (isVisible ? 'poseview': 'poseview hide')

  return (
    <div className={classes}>
      <section className="hero">
        <div className="container">
          <img className="img-padding" src={pose.image} />
        </div>
      </section>

      <section className="hero">
        <div className="container">
          <h4 className="title is-4">{pose.name}</h4>
          <p>Type: {pose.type}</p>
          <p>Difficulty: {pose.difficulty}</p>
          <p>Number of People: {pose.numPpl}</p>
          <br />
        </div>
      </section>

    </div>
  )
}
