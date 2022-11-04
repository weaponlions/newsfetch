import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
// import PropTypes from 'prop-types'

export default class News extends Component {
  
  static defaultProps = {
    category: 'general'
  }
  constructor(){
    super();
    this.state = {
      articles : '',
      page: 1,
      loading : true
    }
  }

  async handleUpdateNews (){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3c52ad50f564468594fdfba9439bb9c7&pageSize=15&page=${this.state.page}`;
    this.setState({loading : true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      pageSize: parsedData.totalResults,
      loading : false
    })
  }
  async componentDidMount (){
    this.props.topLoadBar(10);
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3c52ad50f564468594fdfba9439bb9c7&pageSize=15&page=${this.state.page}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.props.topLoadBar(60);
      this.setState({
        articles: parsedData.articles,
        pageSize: parsedData.totalResults,
        loading : false
      })
      this.props.topLoadBar(100);
    }
   
  handleNextPage = async ()=>{
    console.log(this.state.page);
        this.setState({
          page: this.state.page + 1,
      })
      console.log(this.state.page);
      this.handleUpdateNews();
    }
  handlePrevPage = async ()=>{
    this.setState({
      page: this.state.page - 1,
  })
  this.handleUpdateNews();
}

  render() { 
    return (
      <>
      <div className="container">
      <a name="top" href='/'></a>
        <div className= {`text-${this.props.mode?'white':'black'} heading mx-5 my-4`} style={{'fontSize': '2rem'}}>
          Latest News from NewsFetcher
        </div>
        <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        {this.state.articles && this.state.articles.map((element)=>{
            return <div className="col mb-4" style={{marginLeft: '50px',marginRight: '50px'}} key={element.title.slice(0,15)}>
            <NewsItem mode={this.props.mode} title={element.title.slice(0,50)} description={element.description?element.description.slice(0,60):element.title} img={element.urlToImage} />
          </div>
          })}
        </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary" disabled={this.state.page <= 1} onClick={this.handlePrevPage} type="button">&laquo; Previous</button>
            <button className="btn btn-primary" disabled={this.state.page >= Math.ceil(this.state.pageSize/15)} onClick={this.handleNextPage} type="button">Next &raquo;</button>
          </div>
      </div>
      
      { this.state.loading && <Loading/>}
      </>
    )
  }
}
