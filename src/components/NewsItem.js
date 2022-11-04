import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NewsItem extends Component {
  render() {
    let {img, title, description,} = this.props;
    return (
      <>
        <div className={`card bg-${this.props.mode?'dark':'light'} text-${this.props.mode?'white':'black'}`} style={{width: '18rem'}} >
          <img src={img?img:'https://c.ndtvimg.com/2022-07/putk8ito_image_625x300_24_July_22.jpg'} className="card-img-top " alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}..</h5>
              <p className="card-text">{description}...</p>
              <Link to="/" className="btn btn-primary">Read More</Link>
              </div>
        </div>
      </>
    )
  }
}
