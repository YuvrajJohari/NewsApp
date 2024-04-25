import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }
  async componentDidMount(){
    
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=4b4fce88f3924576812f6f5ff871ef4b&page=1&pageSize=${this.props.pageSize}`;
    let data =await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData)
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults
    });
  }
  handlePrevclick=async()=>{
    console.log("previous clicks");
    console.log("next clicks");
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=4b4fce88f3924576812f6f5ff871ef4b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data =await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData)
    
    this.setState({
      page:this.state.page-1,
      articles:parsedData.articles

    })

  }
  handleNextClick=async()=>{
    console.log("next clicks");
    if (this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=4b4fce88f3924576812f6f5ff871ef4b&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data =await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData)
    
    this.setState({
      page:this.state.page+1,
      articles:parsedData.articles
  

    })
  }
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey- Top headlines</h1>
        
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
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
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
      </div>
    );
  }
}

export default News;
