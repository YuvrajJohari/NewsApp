import React, { Component } from 'react'

export class Newsitem extends Component {
  constructor(){
    super();
    
  }
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div>
        <div className="card" >
  <img src={!imageUrl?"https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg":imageUrl} className="card-img-top" alt="t"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
