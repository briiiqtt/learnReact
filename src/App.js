import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: {
        title: 'AAAAAAAAAA',
        sub: 'world wideeeee web'
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject>
        <Subject title="React" sub="ASDASD"></Subject>
        <TOC></TOC>
        <Content title="TITITT" asdf="ASDF"></Content>
    </div>
    )
  }
}

export default App;
