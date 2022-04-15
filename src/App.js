import React, { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      subject: {
        title: "AAAAAAAAAA",
        sub: "world wideeeee web",
      },
      welcome: { title: "Welcome", desc: "Hello, React!@!@" },
      contents: [
        { id: 1, title: "HTML", desc: "H" },
        { id: 2, title: "CSS", desc: "C" },
        { id: 3, title: "JS", desc: "J" },
      ],
      selected_content_id: 3,
    };
  }
  render() {
    let _title = null;
    let _desc = null;

    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      for (let i = 0; i < this.state.contents.length; i++) {
        let data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({
              mode: "welcome",
            });
          }.bind(this)}
        ></Subject>
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: Number(id),
            });
          }.bind(this)}
        ></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
