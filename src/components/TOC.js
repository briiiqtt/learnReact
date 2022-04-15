import React, { Component } from "react";

class TOC extends Component {
  render() {
    let data = this.props.data;
    let list = [];
    console.log(data);
    console.log(data.length);
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
      list.push(
        <li key={data[i].id}>
          <a href={"/content/" + data[i].id}>
            {data[i].title} {data[i].desc}
          </a>
        </li>
      );
    }
    return (
      <nav>
        <ul>{list}</ul>
      </nav>
    );
  }
}

export default TOC;
