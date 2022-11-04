import Navbar from './components/Navbar';
import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom'
import About from './components/About';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';



export default class App extends Component {
  constructor(){
    super();
    this.state = {
      darkMode : false,
      color : 'light',
      progress: 0
    }
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    const handleDarkMode = ()=>{
      if(!this.state.darkMode){
        document.body.style.backgroundColor = 'rgb(0 0 0)';
        this.setState({
          darkMode: true,
          color: 'dark'
        })
      }else{
        document.body.style.backgroundColor = 'rgb(251 255 255)';
        this.setState({
          darkMode: false,
          color: 'light'
        })
      }
    }
    return (
      <>
      <Router>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
        <Navbar mode={this.state} handleMode={handleDarkMode} />
        <div className="container">
        <Routes>
          <Route exact path='/' element={<News mode={this.state.darkMode}  topLoadBar={this.setProgress} />} />
          <Route path='/business' element={<News mode={this.state.darkMode} category='business' key='business' topLoadBar={this.setProgress} />} />
          <Route path='/entertainment' element={<News mode={this.state.darkMode} category='entertainment' key='entertainment'  topLoadBar={this.setProgress} />} />
          {/* <Route path='/general' element={<News mode={this.state.darkMode} category='general' key='general' />} /> */}
          <Route path='/health' element={<News mode={this.state.darkMode} category='health' key='health'  topLoadBar={this.setProgress} />} />
          <Route path='/science' element={<News mode={this.state.darkMode} category='science' key='science'  topLoadBar={this.setProgress} />} />
          <Route path='/sports' element={<News mode={this.state.darkMode} category='sports' key='sports'  topLoadBar={this.setProgress} />} />
          <Route path='/technology' element={<News mode={this.state.darkMode} category='technology' key='technology'  topLoadBar={this.setProgress} />} />
          {/* <Route path='/about' element={<About mode={this.state.darkMode}  topLoadBar={this.setProgress} />} /> */}
        </Routes>
        </div>
      </Router>
      </>
    )
  }
}



