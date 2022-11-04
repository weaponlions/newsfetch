import React, { Component } from 'react'
import loading from '../img/loading.svg'

export default class Loading extends Component {
  render() {
    return (
      <>
      <div className="position-absolute top-50 start-50 translate-middle"  >
        <img src={loading} alt="Loading..."  />
      </div>
      </>
    )
  }
}
