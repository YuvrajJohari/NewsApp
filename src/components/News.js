import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country:'in',
    pageSize:8

  }
  static PropTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number
  }
  
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
    
  }
  async componentDidMount(){
    
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4b4fce88f3924576812f6f5ff871ef4b&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})

    let data =await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData)
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false

    })
  }
  handlePrevclick=async()=>{
    console.log("previous clicks");
   
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4b4fce88f3924576812f6f5ff871ef4b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data =await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData)
    
    this.setState({
      page:this.state.page-1,
      articles:parsedData.articles,
      loading:false

    })

  }
  handleNextClick=async()=>{
    console.log("next clicks");
    if (!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

    
    
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4b4fce88f3924576812f6f5ff871ef4b&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data =await fetch(url);
    let parsedData=await data.json();
    
    
    this.setState({
      page:this.state.page+1,
      articles:parsedData.articles,
      loading:false
  

    })
  }
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey- Top headlines</h1>
        {this.state.loading && <Spinner/>}
        
        <div className="row">
        {this.state.articles.map((element)=>{
          return  <div className="col-md-4 "key = {element.url}>
          <Newsitem
            title={element.title}
            description={element.description}
            imageUrl={element.urlToImage}
            newsUrl={element.url}
          />
        </div>

        })
      }
         
        </div>
        <div className="container d-flex justify-content-between mx-3 my-5">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePrevclick}>&larr; previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
      </div>
    );
  }
}

export default News;
